require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const { seedData } = require('./lib/utils/seed-data.js');

seedData()
  .then(() => console.log('data seeded'))
  .finally(() => mongoose.connection.close());
