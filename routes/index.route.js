const router = require('express').Router();
const detectRoute = require('./detect.route');
const categoryRoute = require('./category.route');
const detectedObjectRoute = require('./detectedObject.route');
const playRoute = require('./play.route');

router.get('/', (req, res) => {
  res.status(200).json('home');
});

router.use('/detect', detectRoute);
router.use('/category', categoryRoute);
router.use('/detected_object', detectedObjectRoute);
router.use('/play', playRoute);

module.exports = router;