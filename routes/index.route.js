const router = require('express').Router();
const detectRoute = require('./detect.route');

router.get('/', (req, res) => {
  res.status(200).json('home');
});

router.use('/detect', detectRoute);

module.exports = router;