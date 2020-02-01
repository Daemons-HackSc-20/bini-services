const mongoose = require('mongoose');

const { Schema } = mongoose;

const DetectedObjectSchema = new Schema({
  name: { type: String },
  image_uri: { type: String },
  is_recyclable: { type: Boolean, default: false },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'RecyclableCategory' },
}, { timestamps: true });

const DetectedObject = mongoose.model('DetectedObject', DetectedObjectSchema);

module.exports = DetectedObject;