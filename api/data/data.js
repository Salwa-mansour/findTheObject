const prisma = require('./connection');

async function getLevels() {
    const levels = await prisma.level.findMany({
        include: {
            targets: {
              
                select: {
                    id: true,
                    name: true,
                    iconFileName: true,
                    levelId: true,
                   
                }
            },
        },
    });
    return levels;
}

async function generateSesstion(levelId) {
        const session = await prisma.PlayerSession.create({
            data: {
                levelId: levelId,    
            },
        });
        return session;
}

async function getTarget(targetId) {
   const target = await prisma.SearchObject.findUnique({
        where: {
            id: targetId,
        },
    });
    return target;
}

module.exports = {
    getLevels,
    generateSesstion,
    getTarget,
};