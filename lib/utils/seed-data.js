const csv = require('csvtojson');
const HospitalPricing = require('../models/HospitalPricing.js');

function seedData(){
  console.log(__dirname);
  return csv()
    .fromFile(__dirname + '/../../assets/OR_hos_prices1.csv')
    .then(hospitals => {
      return hospitals.map(hospital => ({
        name: hospital.name,
        lat: hospital.lat,
        long: hospital.long,
        thyroidectomy: hospital.Thyroidectomy,
        breastReconstruction: hospital.BreastReconstruction,
        chemotherapyInjection: hospital.ChemotherapyInjection,
        cSection: hospital.CSection,
        spinalXRay: hospital.SpinalXRay,
        chemotherapyIV: hospital.ChemotherapyIV,
        spinalTap: hospital.SpinalTap,
        coronaryBypass: hospital.CoronaryBypass,
        ultrasound: hospital.Ultrasound,
        kneeReplacement: hospital.KneeReplacement,
        hipReplacement: hospital.HipReplacement,
        bloodTransfusion: hospital.BloodTransfusion,
        colonoscopy: hospital.Colonoscopy,
        breastBiopsy: hospital.BreastBiopsy,
        bigToeSurgery: hospital.BigToeSurgery
      }));
    })
    .then(hospitals => HospitalPricing.create(hospitals));
}

module.exports = { seedData };
