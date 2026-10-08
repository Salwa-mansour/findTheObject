
import catchAsync from '../utils/catchAsyncError.js';
import * as levelService from '../data/controllPanelData.js'; // Assuming your service is saved here

// Handler to create a new level
export const createNewLevel = catchAsync(async (req, res, next) => {
   
    const createdLevel = await levelService.createLevel(req.body);
    
    res.status(201).json({
        status: 'success',
        data: {
            level: createdLevel
        }
    });
});

// Handler to get a single level by ID (for edit form population)
export const getLevelById = catchAsync(async (req, res, next) => {
    const { levelId } = req.params;
  //  console.log("1. Controller hit with levelId:", levelId);

    try {
        const level = await levelService.findLevelById(levelId);
       // console.log("3. Service returned level:", level);

        if (!level) {
            return res.status(404).json({ status: 'fail', message: 'Level not found' });
        }

        res.status(200).json(level);
    } catch (err) {
        console.error("🔥 ERROR HAPPENED INSIDE SERVICE/PRISMA:", err);
        throw err; // Let catchAsync handle it after logging
    }
});
// Handler to update an existing level
export const updateLevel = catchAsync(async (req, res, next) => {
    const { levelId } = req.params;
   
    await levelService.updateLevel(levelId, req.body);
 
    res.status(200).json({
        status: 'success',
        
    });
});