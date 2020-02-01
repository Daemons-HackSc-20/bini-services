const DetectedObject = require('../db/models/DetectedObject');
const Category = require('../db/models/RecyclableCategory');

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
      
      const result = detectedObject.is_recyclable == answer;
    
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
