import express from 'express';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
import { getBaseUrl } from './config.js';
import { connectDB } from './db.js';

const app = express();
const PORT = 8000;

app.use(express.json());

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker backend is running' });
});

// Mount API routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

const baseUrl = getBaseUrl();

const start = async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }

  app.listen(PORT, () => {
    console.log(`OctoFit Tracker backend running on port ${PORT}`);
    console.log(`Base URL: ${baseUrl}`);
  });
};

start();
