"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'sustainability_dashboard', process.env.DB_USER || 'oren', process.env.DB_PASS || 'root123', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
});
exports.default = sequelize;
