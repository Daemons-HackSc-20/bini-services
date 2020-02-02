const Multer = require('multer');
const path = require('path')

module.exports = {
  HandleMultiForm:  Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 5 * 1024 * 1024 
    },
  }),
};
