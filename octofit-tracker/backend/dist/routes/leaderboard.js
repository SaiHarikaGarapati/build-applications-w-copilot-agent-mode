import { Router } from 'express';
import Leaderboard from '../models/leaderboard.js';
const router = Router();
// GET /api/leaderboard/
router.get('/', async (req, res) => {
    const entries = await Leaderboard.find().populate('entity').lean();
    res.json(entries);
});
export default router;
