const router = require('express').Router();
const { showAll, create } = require('../controllers/detectedObject.controller');

router.get('/', showAll);
router.post('/', create);

module.exports = router;
