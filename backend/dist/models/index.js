"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = exports.User = exports.sequelize = void 0;
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Metric_1 = __importDefault(require("./Metric"));
exports.Metric = Metric_1.default;
// Define associations
User_1.default.hasMany(Metric_1.default, { foreignKey: 'userId' });
Metric_1.default.belongsTo(User_1.default, { foreignKey: 'userId' });
