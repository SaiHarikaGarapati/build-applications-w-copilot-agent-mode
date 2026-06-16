import { Router } from 'express';
import Activity from '../models/activity.js';
const router = Router();
// GET /api/activities/
router.get('/', async (req, res) => {
    const activities = await Activity.find().populate('user').lean();
    res.json(activities);
});
// POST /api/activities/
router.post('/', async (req, res) => {
    const data = req.body;
    const activity = new Activity(data);
    await activity.save();
    res.status(201).json(activity);
});
export default router;
