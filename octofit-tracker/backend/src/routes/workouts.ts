import { Router } from 'express';
import Workout from '../models/workout.js';

const router = Router();

// GET /api/workouts/
router.get('/', async (req, res) => {
  const workouts = await Workout.find().lean();
  res.json(workouts);
});

// POST /api/workouts/
router.post('/', async (req, res) => {
  const data = req.body;
  const workout = new Workout(data);
  await workout.save();
  res.status(201).json(workout);
});

export default router;
