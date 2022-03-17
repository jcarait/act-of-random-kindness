const { Task } = require('../models');


const taskData = [
  {
    task_name: "Flood clean up outside yard",
    description: "Debris and rubbish leftover from flood on lawn. Disabled persons in need of a volunteer who can assist",
    date: new Date(2022,2,23),
    duration: 180,
    status: "open",
    creator_id: 1,
    volunteer_id: 3
  },
  {
    task_name: "Lawm Mowing",
    description: "Elderly couple looking for help to mow our lawn. any help is much appreciated",
    date: new Date(2022,3,13),
    duration: 120,
    status: "open",
    creator_id: 1,
    volunteer_id: 4
  },
  {
    task_name: "Plumbing",
    description: "in bit of financial situation and need help with plumbing fix in bathroom",
    date: new Date(2022,2,28),
    duration: 180,
    status: "open",
    creator_id: 3,
    volunteer_id: 2
  },
  
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;