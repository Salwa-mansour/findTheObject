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

module.exports = {
    getLevels,
    generateSesstion,
};