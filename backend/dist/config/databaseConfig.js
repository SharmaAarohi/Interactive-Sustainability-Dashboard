"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = process.env.DATABASE_URL
    ? new sequelize_1.Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        logging: console.log, // Disable logging in production
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // Allows self-signed certificates
            },
        },
    })
    : new sequelize_1.Sequelize(process.env.DB_NAME || 'sustainability_dashboard', process.env.DB_USER || 'oren', process.env.DB_PASS || 'root123', {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: false, // Optional: Disable logging
        dialectOptions: process.env.NODE_ENV === 'production'
            ? {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            }
            : undefined, // No SSL in development
    });
exports.default = sequelize;
