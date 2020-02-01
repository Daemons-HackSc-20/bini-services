const DetectedObject = require('../db/models/DetectedObject');
const Category = require('../db/models/RecyclableCategory');

module.exports = {
  getAll: async () => {
    try {
      const detectedObjects = await DetectedObject.find();

      return Promise.resolve(detectedObjects);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  create: async (name, isRecyclable, categoryName, imageUri) => {
    try {
      let category = await Category.findOne({name: categoryName});

      const newDetectedObject = await new DetectedObject({
        name,
        is_recyclable: isRecyclable,
        category_id: category._id,
        image_uri: imageUri,
      }).save();

      await Category.updateOne({ _id: category._id }, { $push: { detected_objects: newDetectedObject._id } });

      return Promise.resolve(newDetectedObject);
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
