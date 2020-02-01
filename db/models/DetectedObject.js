const mongoose = require('mongoose');

const { Schema } = mongoose;

const DetectedObjectSchema = new Schema({
  name: { type: String },
  image_url: { type: String },
  is_recyclable: { type: Boolean, default: false },
}, { timestamps: true });

const DetectedObject = mongoose.model('DetectedObject', DetectedObjectSchema);

module.exports = DetectedObject;