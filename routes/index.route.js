const router = require('express').Router();
const detectRoute = require('./detect.route');
const categoryRoute = require('./category.route');

router.get('/', (req, res) => {
  res.status(200).json('home');
});

router.use('/detect', detectRoute);
router.use('/category', categoryRoute);

module.exports = router;