import express from 'express';
import { getLogs, addLog, updateLogStatus, deleteLog } from '../controllers/logController.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/:vehicleId', verifyToken, getLogs);
router.post('/', verifyToken, addLog);
router.put('/:id', verifyToken, updateLogStatus);
router.delete('/:id', verifyToken, deleteLog);

export default router;