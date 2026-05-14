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
module.exports = {
    getLevelList,
    createSession,
};