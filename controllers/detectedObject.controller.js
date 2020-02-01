const detectedObjectService = require('../services/detectedObject.service');

module.exports = {
  showAll: async (req, res) => {
    try {
      const detectedObjects = await detectedObjectService.getAll();

      res.status(200).json({
        message: 'detected objects have been fetched',
        detectedObjects,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }  
  },
  create: async (req, res) => {
    try {
      const { name, isRecyclable, categoryName, imageUri } = req.body;
      const newDetectedObject = await detectedObjectService.create(name, isRecyclable, categoryName, imageUri);

      res.status(201).json({
        message: 'a new object has been added',
        newDetectedObject,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  }
};
