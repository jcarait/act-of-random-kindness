// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our databse connection from config.js
const sequelize = require('../../config/connection');

// Initialise Location model (table) by extending off Sequelize's Model class
class TaskLocation extends Model { }

TaskLocation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        unit_number: {
            type: DataTypes.INTEGER,
        },
        street_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        street_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        suburb: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        task_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'task',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'task_location',
    }
);

module.exports = TaskLocation;