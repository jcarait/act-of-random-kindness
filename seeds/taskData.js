const { Task } = require('../models');


const taskData = [
  {
    task_name: "Flood clean up outside yard",
    description: "Debris and rubbish leftover from flood on lawn. Disabled persons in need of a volunteer who can assist",
    date: new Date(2022,2,23),
    duration: 180,
    creator_id: 1,
    volunteer_id: 3
  },
  
];

const seedTask = () => Task.bulkCreate(taskData);

module.exports = seedTask;