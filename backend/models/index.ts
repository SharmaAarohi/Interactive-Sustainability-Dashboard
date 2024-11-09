import sequelize from '../config/database';
import User from './User';
import Metric from './Metric';

// Define associations
User.hasMany(Metric, { foreignKey: 'userId' });
Metric.belongsTo(User, { foreignKey: 'userId' });

export { sequelize, User, Metric };
