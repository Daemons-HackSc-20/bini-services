const axios = require('axios');

module.exports = {
  createPayload: (imageUri) => {
    return {
      "requests": [{
        "image": {
          "source": {
            "imageUri": imageUri,
          },
        },
        "features": [{
          "type": 'OBJECT_LOCALIZATION',
          "maxResults": 5
        }]
      }]
    };
  },
  detectImage: async (imageUri) => {
    const data = module.exports.createPayload(imageUri);

    try {
      const result = await axios({
        method: 'POST',
        url: `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_VISION_API_KEY}`,
        data: data,
      });

      let [ { localizedObjectAnnotations }] = result.data.responses;

      const detectionResults = localizedObjectAnnotations.map(({ name }) => name);
      return Promise.resolve(detectionResults);
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
