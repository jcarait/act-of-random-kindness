// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our databse connection from config.js
const sequelize = require('../config/connection');

// Initialise Task model (table) by extending off Sequelize's Model class
class Task extends Model { }

// set up fields and rules for Task model
Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'task',
    }
);

module.exports = Task