const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  long: {
    type: Number,
    required: true
  },
  thyroidectomy: {
    type: Number,
    required: true
  },
  breastReconstruction: {
    type: Number,
    required: true
  },
  chemotherapyInjection: {
    type: Number,
    required: true
  },
  cSection: {
    type: Number,
    required: true
  },
  spinalXRay: {
    type: Number,
    required: true
  },
  chemotherapyIV: {
    type: Number,
    required: true
  },
  spinalTap: {
    type: Number,
    required: true,
  },
  coronaryBypass: {
    type: Number,
    required: true
  },
  ultrasound: {
    type: Number,
    required: true
  },
  kneeReplacement: {
    type: Number,
    required: true
  },
  hipReplacement: {
    type: Number,
    required: true
  },
  bloodTransfusion: {
    type: Number,
    required: true
  },
  colonoscopy: {
    type: Number,
    required: true
  },
  breasyBiopsy: {
    type: Number,
    required: true
  },
  bigToeSurgery: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('hospitalPricing', schema);
