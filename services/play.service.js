const DetectedObject = require('../db/models/DetectedObject');

module.exports = {
  getRandomQuestion: async () => {
    try {
      const detectedObjects = await DetectedObject.find();
      
      const randomIndex = Math.floor(Math.random()*detectedObjects.length);
      return Promise.resolve(detectedObjects[randomIndex]);
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
