import prisma from './connection.js'

async function createLevel(levelData) {
    const { title, difficulty, imageFileName, targets } = levelData;

    // Prisma can create the Level and all its related SearchObjects in one go!
    const newLevel = await prisma.level.create({
        data: {
            title,
            difficulty,
            imageFileName,
            targets: {
                create: targets.map(target => ({
                    name: target.name,
                    iconFileName: target.iconFileName,
                    targetX: target.targetX,
                    targetY: target.targetY,
                    radius: target.radius || 3.0,
                })),
            },
        },
        include: {
            targets: true, // Returns the created level along with its targets
        },
    });

    return newLevel;
}
// Find Single Level Service
async function findLevelById(levelId) {
     
    const level =await prisma.level.findUnique({
    where: { id: levelId }, // Use string if your IDs are UUIDs/Strings
    include: { targets: true }
  });

  return level;
};

// Update Level Service
async function updateLevel(levelId, data) {
  //console.log("🛠️ STARTING direct updateLevel (No Transaction) for ID:", levelId);

  // 1. Format the new targets list
  const formattedTargetsData = data.targets.map((t) => {
    const parsedX = parseFloat(t.targetX);
    const parsedY = parseFloat(t.targetY);
    const parsedRadius = parseFloat(t.radius);

    return {
      levelId: levelId,
      name: t.name,
      iconFileName: t.iconFileName,
      targetX: isNaN(parsedX) ? 0.0 : parsedX,
      targetY: isNaN(parsedY) ? 0.0 : parsedY,
      radius: isNaN(parsedRadius) ? 3.0 : parsedRadius
    };
  });

  // 2. Update main level details directly
  console.log("➡️ Executing level update...");
  await prisma.level.update({
    where: { id: levelId },
    data: {
      title: data.title,
      difficulty: data.difficulty,
      imageFileName: data.imageFileName,
    }
  });

  // 3. Clear old search objects directly
  console.log("➡️ Deleting old search objects...");
  await prisma.searchObject.deleteMany({
    where: { levelId: levelId }
  });

  // 4. Insert new search objects directly
  console.log("➡️ Inserting new search objects...");
  await prisma.searchObject.createMany({
    data: formattedTargetsData
  });
//this part fails ???
  // 5. Fetch and return the final updated level with its relations
//   console.log("➡️ Fetching final updated level...");
//   const finalLevel = await prisma.level.findUnique({
//     where: { id: levelId },
//     include: { search_objects: true }
//   });

  console.log("✅ Level update completed successfully!");
 
//   return ;
}
export {
   
    createLevel,
    findLevelById,
    updateLevel
};