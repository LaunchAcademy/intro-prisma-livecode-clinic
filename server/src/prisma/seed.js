import prisma from "./prisma.js";

import BoardGameSeeder from "./seeders/BoardGameSeeder.js";

const main = async () => {
  console.log("Seeding Board Games...");
  await BoardGameSeeder.seed()
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
