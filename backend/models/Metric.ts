import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/databaseConfig';

class Metric extends Model {
  public id!: number;
  public userId!: number;
  public year!: number;
  public carbonEmissions!: number;
  public waterUsage!: number;
  public wasteGenerated!: number;
}

Metric.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carbonEmissions: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  waterUsage: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  wasteGenerated: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'metrics',
  timestamps: true,
});

export default Metric;
