
const prisma = require('../data/connection');

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
            targetX: 41,
            targetY: 36,
            radius: 3.61,
          },
          {
            name: 'Stack of Books',
            iconFileName: "books.jpg",
            targetX: 59.5,
            targetY: 67.4,
            radius: 3.0,
          },
          {
            name: 'Vase of Flowers',
            iconFileName: "flowers.jpg",
            targetX: 88.0,
            targetY: 65.0,
            radius: 8.95,
          },
          {
            name: 'mater',
            iconFileName: "mater.jpg",
            targetX: 39.5,
            targetY: 90.5,
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