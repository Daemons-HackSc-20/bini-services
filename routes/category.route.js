const router = require('express').Router();
const { showAll, create } = require('../controllers/category.controller');

router.get('/', showAll);
router.post('/', create);

module.exports = router;
