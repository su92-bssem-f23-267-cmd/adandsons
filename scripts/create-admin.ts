import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

async function createAdmin() {
    const connectionString = process.env.DATABASE_URL!
    const pool = new Pool({ connectionString })
    const adapter = new PrismaPg(pool)
    const prisma = new PrismaClient({ adapter })

    try {
        // Check if admin user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: "mrfarooq030@gmail.com" }
        })

        if (existingUser) {
            console.log("✅ Admin user already exists!")
            console.log(`   Email: ${existingUser.email}`)
            console.log(`   Name: ${existingUser.name}`)
            return
        }

        // Create admin user
        const adminUser = await prisma.user.create({
            data: {
                name: "Muhammad Farooq",
                email: "mrfarooq030@gmail.com",
                password: "Farooq100"
            }
        })

        console.log("✅ Admin user created successfully!")
        console.log(`   ID: ${adminUser.id}`)
        console.log(`   Name: ${adminUser.name}`)
        console.log(`   Email: ${adminUser.email}`)

    } catch (error) {
        console.error("❌ Error creating admin user:", error)
    } finally {
        await prisma.$disconnect()
        await pool.end()
    }
}

createAdmin()
