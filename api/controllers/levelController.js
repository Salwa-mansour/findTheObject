const db = require('../data/data');

async function getLevelList(req, res) {
    try {
        const levels = await db.getLevels();
        res.status(200).json(levels);
    } catch (error) {
        console.error('Error fetching levels:', error);
        res.status(400).json({ error: 'Failed to fetch levels' });
    }   
}
async function createSession(req, res) {
    const { levelId } = req.body;
    try {
        const session = await db.generateSesstion(levelId);
        res.status(200).json(session);
    } catch (error) {
        console.error('Error creating session:', error);
        res.status(400).json({ error: 'Failed to create session' });
    }
}
async function checkPointHit(req, res) {
    const { possipleTargetId, xPoint, yPoint } = req.body;
    try {   
        const target = await db.getTarget( possipleTargetId);
            console.log('Target:', target);
            console.log(`xPoint: ${xPoint}, yPoint: ${yPoint}`);
      
            const distance = Math.sqrt((xPoint - target.targetX) ** 2 + (yPoint - target.targetY) ** 2); 
            console.log(`Calculated distance: ${distance}, Target radius: ${target.radius}`);   
            if (distance <= target.radius) {
                return res.status(200).json({ hit: true, target: target });
            }
       

       return res.status(200).json({ hit: false });
       
    } catch (error) {
        console.error('Error checking point hit:', error);
        res.status(400).json({ error: 'Failed to check point hit' });
    }
}
module.exports = {
    getLevelList,
    createSession,
    checkPointHit
};