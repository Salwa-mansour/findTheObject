const prisma = require('./connection');

async function getLevels() {
    const levels = await prisma.level.findMany({
        include: {
            targets: true,
        },
    });
    return levels;
}

module.exports = {
    getLevels,
};