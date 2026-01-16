import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        // Validate input
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 400 }
            );
        }

        // Create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password, // In production, hash this password!
            },
        });

        return NextResponse.json(
            { message: "Account created successfully!", user: { id: user.id, name: user.name, email: user.email } },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Signup error:", error);
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
