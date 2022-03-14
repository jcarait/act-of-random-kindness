const { Location } = require('../models');


const locationData = [
  {
    unit_number: "",
    street_number: "725",
    street_name: "Pittwater Rd",
    suburb: "Dee Why",
    postcode: "2100",
    state: "NSW"
  },
  {
    unit_number: "705",
    street_number: "822",
    street_name: "Pittwater Rd",
    suburb: "Dee Why",
    postcode: "2100",
    state: "NSW"
  },
  {
    unit_number: "",
    street_number: "21",
    street_name: "Beacon Hill Rd",
    suburb: "Beacon Hill",
    postcode: "2100",
    state: "NSW"
  },
  {
    unit_number: "",
    street_number: "2",
    street_name: "West St",
    suburb: "Brookvale",
    postcode: "2100",
    state: "NSW"
  }
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;