import { Router } from 'express';
import User from '../models/user.js';

const router = Router();

// GET /api/users/
router.get('/', async (req, res) => {
  const users = await User.find().lean();
  res.json(users);
});

// POST /api/users/
router.post('/', async (req, res) => {
  const data = req.body;
  const user = new User(data);
  await user.save();
  res.status(201).json(user);
});

export default router;
