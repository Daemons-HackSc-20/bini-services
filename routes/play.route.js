const router = require('express').Router();
const { getRandomQuestion, submitAnswer } = require('../controllers/play.controller');

router.get('/', getRandomQuestion);
router.post('/', submitAnswer);

module.exports = router;