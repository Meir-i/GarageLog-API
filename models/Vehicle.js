import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Vehicle = sequelize.define('Vehicle', {
  type: {
    type: DataTypes.ENUM('Car', 'Motorcycle', 'Other'),
    allowNull: false
  },
  makeModel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER
  }
});

export default Vehicle;