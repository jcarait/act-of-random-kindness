const { User } = require('../models');


const userData = [
  {
    user_name: "roman725",
    first_name: "Roman",
    last_name: "Acharya",
    email: "roman.ac@gmail.com",
    password: "password12345"
  },
  {
    user_name: "jono725",
    first_name: "Jonathan",
    last_name: "Carait",
    email: "jono.car@gmail.com",
    password: "password12345"
  },
  {
    user_name: "tiff725",
    first_name: "Tiff",
    last_name: "Borgese",
    email: "tiff.borgese@gmail.com",
    password: "password12345"
  },
  {
    user_name: "lamek725",
    first_name: "Lamek",
    last_name: "Marouf",
    email: "lamek.marouf@gmail.com",
    password: "password12345"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;