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
  thyroidectomy: Number,
  breastReconstruction: Number,
  chemotherapyInjection: Number,
  cSection: Number,
  spinalXRay: Number,
  chemotherapyIV: Number,
  spinalTap: Number,
  coronaryBypass: Number,
  ultrasound: Number,
  kneeReplacement: Number,
  hipReplacement: Number,
  bloodTransfusion: Number,
  colonoscopy: Number,
  breastBiopsy: Number,
  bigToeSurgery: Number
});

module.exports = mongoose.model('hospitalPricing', schema);
