import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import './models/index.js';
import authRoutes from './routes/authRoutes.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import logRoutes from './routes/logRoutes.js';
import rateLimit from 'express-rate-limit';

// טעינת משתני סביבה מהקובץ .env
dotenv.config();

const app = express();

app.use(express.json());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});
app.use(limiter);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/vehicles', vehicleRoutes);
app.use('/api/v1/logs', logRoutes); 

const PORT = process.env.PORT || 3000;

// סנכרון הטבלאות מול מסד הנתונים והפעלת השרת
sequelize.sync().then(() => {
  console.log('Database connected and synced');
  app.listen(PORT, () => {
    console.log(`GarageLog server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to database:', err);
});