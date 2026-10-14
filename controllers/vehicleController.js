import { Vehicle } from '../models/index.js';

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll({ where: { userId: req.user.id } });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addVehicle = async (req, res) => {
  try {
    const { type, makeModel, year } = req.body;
    const vehicle = await Vehicle.create({ type, makeModel, year, userId: req.user.id });
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};