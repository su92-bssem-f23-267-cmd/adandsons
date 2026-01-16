import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

const getPrismaClient = () => {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        // We don't throw here to avoid crashing the build process
        // But we will return a client that throws when used if we are at runtime
        console.warn("DATABASE_URL is missing. Database operations will fail at runtime.");

        // Return a proxy that throws on any property access
        return new Proxy({} as PrismaClient, {
            get: (_, prop) => {
                throw new Error(
                    `DATABASE_URL is missing! Please set it in your environment variables (Vercel Settings > Environment Variables). Property accessed: ${String(prop)}`
                );
            }
        });
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
