// import models
const User = require('./objects/User');
const Task = require('./objects/Task');
const Location = require('./objects/Location');
const TaskLocation = require('./objects/TaskLocation');
const UserTask = require('./relationships/UserTask');
// Tag to be added later once all other objects are functional
// const Tag = require('./objects/Tag')

// Task hasOne TaskLocation
Task.hasOne(TaskLocation, {
    foreignKey: 'task_id',
    onDelete: 'CASCADE',
});

// TaskLocation hasOne Task
TaskLocation.belongsTo(Task, {
    foreignKey: 'task_id',
});

// Task belongsToMany Users
Task.belongsToMany(User, {
    through: { model: UserTask, },
    foreign_key: 'task_id',
});

// User belongsToMany Tasks
User.belongsToMany(Task, {
    through: { model: UserTask, },
    foreignKey: 'user_id',
});