import { db } from "#app/db.server.js"

async function seed() {
  console.log('🌱 Seeding...')

  // const totalUsers = 5
  // console.time(`👤 Created ${totalUsers} users...`)


  console.timeEnd(`🌱 Database has been seeded`)
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
