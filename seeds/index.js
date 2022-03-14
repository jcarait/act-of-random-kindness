const seedUsers = require('./userData');
const seedTasks = require('./taskData');
const seedLocations = require('./locationData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers()
  console.log('\n----- USERS SEEDED -----\n');
  await seedTasks()
  console.log('\n----- TASKS SEEDED -----\n');
  await seedLocations()
  console.log('\n----- LOCATIONS SEEDED -----\n');
  process.exit(0);
};

seedAll();