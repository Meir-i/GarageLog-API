import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const MaintenanceLog = sequelize.define('MaintenanceLog', {
  faultCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
    defaultValue: 'pending'
  }
});

export default MaintenanceLog;