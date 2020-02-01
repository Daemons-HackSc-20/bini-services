const categoryService = require('../services/category.service');

module.exports = {
  showAll: async (req, res) => {
    try {
      const categories = await categoryService.getAll();

      res.status(200).json({
        message: 'categories have been fetched',
        categories,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }  
  },
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const newCategory = await categoryService.create(name);

      res.status(201).json({
        message: 'a new category has been added',
        newCategory,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  }
};
