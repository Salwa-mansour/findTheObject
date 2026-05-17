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
async function endSession(sessionId) { // Fixed spelling to 'Session'
    try {
        // 1. Fetch the existing session
        const existingSession = await prisma.PlayerSession.findUnique({
            where: { id: sessionId },
        });

        // Safety Guard: Handle case where session doesn't exist
        if (!existingSession) {
            throw new Error(`Session with ID ${sessionId} not found.`);
        }

        const endTime = new Date();
        
        // Calculate the difference in milliseconds
        // Explicitly calling .getTime() ensures clean type casting for math math subtraction
        const timeDiff = endTime.getTime() - new Date(existingSession.startTime).getTime();
        
     // 2. Persist the completion metadata
        const updatedSession = await prisma.PlayerSession.update({
            where: { id: sessionId },
            data: {
                endTime: endTime,
                finalTimeSeconds: timeDiff, // Assumes duration field is an Int/Float in your schema
            },
        });

        return updatedSession;
    } catch (error) {
        console.error("Error in endSession data layer:", error);
        throw error; // Re-throw to handle inside your Express controller wrapper
    }
}
module.exports = {
    getLevels,
    generateSesstion,
    getTarget,
    endSession
};