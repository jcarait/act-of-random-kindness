const { TaskLocation } = require('../models');


const tasklocationData = [
  {
    street_number: 725,
    street_name: "Pittwater Rd",
    suburb: "Dee Why",
    postcode: 2100,
    state: "NSW",
    task_id:1
  },
  {
    unit_number: 705,
    street_number: 822,
    street_name: "Pittwater Rd",
    suburb: "Dee Why",
    postcode: 2100,
    state: "NSW",

  },
  {
    street_number: 21,
    street_name: "Beacon Hill Rd",
    suburb: "Beacon Hill",
    postcode: 2100,
    state: "NSW",

  },
  {
    street_number: 2,
    street_name: "West St",
    suburb: "Brookvale",
    postcode: 2100,
    state: "NSW",

  }
];

const seedLocations = () => TaskLocation.bulkCreate(tasklocationData);

module.exports = seedLocations;