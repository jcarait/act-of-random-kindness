// import models
const User = require('./objects/User');
const Task = require('./objects/Task');
const TaskLocation = require('./objects/TaskLocation');
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

// Task belongsTo a creator
Task.belongsTo(User, {
    foreign_key: 'creator_id',
    as: 'creator'
});

// Task belongsTo a volunteer
Task.belongsTo(User, {
    foreign_key: 'volunteer_id',
    as: 'volunteer'
});

// Creator hasMany Tasks
User.hasMany(Task, {
    foreignKey: 'creator_id',
    as: 'creator_tasks'
});

// Volunteers hasMany Tasks
User.hasMany(Task, {
    foreignKey: 'volunteer_id',
    as: 'volunteer_tasks'
});

module.exports = {
    User,
    Task,
    TaskLocation,
};