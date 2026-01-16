import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

const getPrismaClient = () => {
    const connectionString = process.env.DATABASE_URL;
    const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build' || process.env.NODE_ENV === 'production' && !process.env.NEXT_RUNTIME;

    if (!connectionString) {
        // Silent during build phase to avoid deployment crashes
        if (typeof window === 'undefined') {
            console.warn("DATABASE_URL is missing. Database operations will fail at runtime.");
        }

        // Return a proxy that only throws when someone tries to actually use a method (like findUnique, create, etc.)
        // but allows simple property access (like .user) during static analysis/build
        return new Proxy({} as any, {
            get: (target, prop) => {
                if (prop === 'constructor' || prop === 'then' || typeof prop === 'symbol') return undefined;

                // If they access a model (like .user, .product), return another proxy for that model
                return new Proxy({}, {
                    get: (_, method) => {
                        return (...args: any[]) => {
                            throw new Error(
                                `CRITICAL: DATABASE_URL is missing in environment variables. \n` +
                                `Action attempted: prisma.${String(prop)}.${String(method)} \n` +
                                `Please add DATABASE_URL to your Vercel Project Settings > Environment Variables.`
                            );
                        };
                    }
                });
            }
        }) as PrismaClient;
    }

    const pool = new Pool({
        connectionString,
        ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
    });

    const adapter = new PrismaPg(pool);

    return new PrismaClient({
        adapter,
        log: ["error", "warn"],
    });
};

export const prisma = globalForPrisma.prisma ?? getPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
