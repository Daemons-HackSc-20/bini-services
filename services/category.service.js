const Category = require('../db/models/RecyclableCategory');

module.exports = {
  getAll: async () => {
    try {
      const categories = await Category.find().populate('detected_objects');

      return Promise.resolve(categories);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  create: async (name) => {
    try {
      const newCategory = await new Category({
        name,
      }).save();

      return Promise.resolve(newCategory);
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
