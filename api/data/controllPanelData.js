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

export {
   
    createLevel,
};