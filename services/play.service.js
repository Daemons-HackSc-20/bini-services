const DetectedObject = require('../db/models/DetectedObject');

module.exports = {
  getRandomQuestion: async () => {
    try {
      const detectedObjects = await DetectedObject.find();
      
      // todo randomize output
      return Promise.resolve(detectedObjects[0]);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  submitAnswer: async (objectId, answer) => {
    try {
      let detectedObject = await DetectedObject.findOne({_id: objectId});

      const isRecyclable = detectedObject.is_recyclable ? 'true' : 'false';

      const result = isRecyclable === answer
      
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
