
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

// Optional: Handler to get all levels if you have it in your services
export const getAllLevels = catchAsync(async (req, res, next) => {
    const levels = await levelService.getLevels();
    
    res.status(200).json({
        status: 'success',
        results: levels.length,
        data: {
            levels
        }
    });
});