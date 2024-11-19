"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
// const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
//   dialect: 'postgres',
//   logging: false, // Set to true for debugging
// });
// export default sequelize;
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Optional: Set to true to log queries
    dialectOptions: {
        ssl: {
            require: true, // Enforce SSL
            rejectUnauthorized: false, // Allows self-signed certificates
        },
    },
});
exports.default = sequelize;
