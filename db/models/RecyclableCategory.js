const mongoose = require('mongoose');

const { Schema } = mongoose;

const RecyclableCategorySchema = new Schema({
  name: { type: String },
  detected_objects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DetectedObject' }],
}, { timestamps: true });

const RecyclableCategory = mongoose.model('RecyclableCategorySchema', RecyclableCategorySchema);

module.exports = RecyclableCategory;