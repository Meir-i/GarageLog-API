import User from './User.js';
import Vehicle from './Vehicle.js';
import MaintenanceLog from './MaintenanceLog.js';

// User -> Vehicles (One-to-Many)
User.hasMany(Vehicle, { foreignKey: 'userId', onDelete: 'CASCADE' });
Vehicle.belongsTo(User, { foreignKey: 'userId' });

// Vehicle -> MaintenanceLogs (One-to-Many)
Vehicle.hasMany(MaintenanceLog, { foreignKey: 'vehicleId', onDelete: 'CASCADE' });
MaintenanceLog.belongsTo(Vehicle, { foreignKey: 'vehicleId' });

export { User, Vehicle, MaintenanceLog };