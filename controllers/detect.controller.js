const uploadService = require('../services/upload.service');
const detectionService = require('../services/detection.service');
const classifierService = require('../services/classifier.service');

module.exports = {
  detect: async (req, res) => {
    try {
      const { file } = req;
      const imageUri = await uploadService.uploadImage(file);
      console.log(imageUri);
      const result = await classifierService.getClassification(imageUri);

      res.status(200).json({
        message: "image has been analyzed",
        data: result,
      });
    } catch (err) {
      res.status(401).json({
        message: err.message,
      });
    }
  }
};
