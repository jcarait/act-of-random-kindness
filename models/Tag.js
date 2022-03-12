// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our databse connection from config.js
const sequelize = require('../config/connection');

// Initialise Task model (table) by extending off Sequelize's Model class
class Tag extends Model { }

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
);