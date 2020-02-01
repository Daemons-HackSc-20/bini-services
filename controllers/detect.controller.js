const uploadService = require('../services/upload.service');

module.exports = {
  detect: async (req, res) => {
    try {
      const { file } = req;
      const imageUrl = await uploadService.uploadImage(file);
      res.status(200).json({
          message: "image has been uploaded",
          data: imageUrl
      });
    } catch (err) {
      res.status(401).json({
        message: err.message,
      });
    }
  }
};
