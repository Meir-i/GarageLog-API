import { MaintenanceLog } from '../models/index.js';

export const getLogs = async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const logs = await MaintenanceLog.findAll({ where: { vehicleId } });
    res.status(200).json(logs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addLog = async (req, res) => {
  try {
    const { vehicleId, faultCode, description } = req.body;
    const log = await MaintenanceLog.create({ vehicleId, faultCode, description });
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateLogStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const log = await MaintenanceLog.findByPk(id);
    if (!log) return res.status(404).json({ error: 'Log not found' });

    log.status = status;
    await log.save();
    res.status(200).json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteLog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await MaintenanceLog.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'Log not found' });
    res.status(200).json({ message: 'Log deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};