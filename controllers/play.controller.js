const playService = require('../services/play.service');

module.exports = {
  getRandomQuestion: async (req, res) => {
    try {
      const randomQuestion = await playService.getRandomQuestion();

      return res.status(200).json({
        message: 'question has been fetched',
        question: randomQuestion,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  },
  submitAnswer: async (req, res) => {
    const { objectId, answer } = req.body;

    const result = await playService.submitAnswer(objectId, answer);

    return res.status(200).json({
      message: 'result has been sent',
      result,
    });
  }
};
