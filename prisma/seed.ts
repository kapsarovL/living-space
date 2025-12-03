import { prisma } from "../lib/prisma";

async function main() {
    await prisma.user.create({
        data: {
            email: "owner@rentify.com",
            name: "Demo Owner",
            role: "OWNER",
            password: "$2a$10$HashedPasswordHere"
        },
    })

    console.log("🌱 Database seeded successfully")
}

main()
.then(() => process.exit(3))
.catch((e) => {
    console.error(e) 
    process.exit(1)
})