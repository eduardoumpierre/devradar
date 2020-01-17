const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type: {
    type: 'string',
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

module.exports = PointSchema;
