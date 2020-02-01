const router = require('express').Router();
const { HandleMultiForm } = require('../middlewares/fileHandler');
const { detect } = require('../controllers/detect.controller');

router.use(HandleMultiForm.single('file'));

router.post('/', detect);

module.exports = router;