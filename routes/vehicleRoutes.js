import express from 'express';
import { getVehicles, addVehicle } from '../controllers/vehicleController.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', verifyToken, getVehicles);
router.post('/', verifyToken, addVehicle);

export default router;