
// const prisma = require('../data/connection');
import prisma from '../data/connection';

async function main() {
  console.log('Start seeding...');

  // 1. Clean the database (Optional: clear existing data before seeding)
  await prisma.searchObject.deleteMany();
  await prisma.playerSession.deleteMany();
  await prisma.level.deleteMany();


  const level1 = await prisma.level.create({
    data: {
      title: "The Busy Library",
      difficulty: "Easy",
      imageFileName: "findTheObject1_1.jpg", 
      targets: {
        create: [
          {
            name: 'Paper Cat',
            iconFileName: "cat.jpg",
            targetX: 37,
            targetY: 31,
            radius: 4,
          },
          {
            name: 'Stack of Books',
            iconFileName: "books.jpg",
            targetX: 57,
            targetY: 66,
            radius: 5,
          },
          {
            name: 'Vase of Flowers',
            iconFileName: "flowers.jpg",
            targetX: 84,
            targetY: 57,
            radius: 8.95,
          },
          {
            name: 'mater',
            iconFileName: "mater.jpg",
            targetX: 36,
            targetY: 86,
            radius: 5.7,
          },
        ],
      },
    },
  });

  console.log(`Seeding finished. Created level: ${level1.title}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });