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

module.exports = {
    getLevelList,
};