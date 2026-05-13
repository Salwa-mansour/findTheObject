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

module.exports = {
    getLevels,
};