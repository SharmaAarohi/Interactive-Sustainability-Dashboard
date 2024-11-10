"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseConfig_1 = __importDefault(require("../config/databaseConfig"));
class Metric extends sequelize_1.Model {
}
Metric.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    carbonEmissions: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    waterUsage: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    wasteGenerated: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: databaseConfig_1.default,
    tableName: 'metrics',
    timestamps: true,
});
exports.default = Metric;
