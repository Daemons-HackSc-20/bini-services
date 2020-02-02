const axios = require('axios');
const qs = require('qs');

module.exports = {
  getClassification: async (imageUri) => {
    try {

      const result = await axios({
        method: 'POST',
        url: process.env.CLASSIFIER_SVC_URL,
        data: qs.stringify({
          imageUri,
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      });


      return Promise.resolve(result.data);
    } catch (err) {
      console.log(err.message);
      return Promise.reject(err);
    }    
  }
};
