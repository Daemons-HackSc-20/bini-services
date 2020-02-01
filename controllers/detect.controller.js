const uploadService = require('../services/upload.service');
const detectionService = require('../services/detection.service');

module.exports = {
  detect: async (req, res) => {
    try {
      const { file } = req;
      const imageUri = await uploadService.uploadImage(file);
      console.log(imageUri);
      const result = await detectionService.detectImage(imageUri);

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
