/*
 Seed the octofit_db database with test data
*/
import { connectDB } from '../db.js';
import User from '../models/user.js';
import Team from '../models/team.js';
import Activity from '../models/activity.js';
import Workout from '../models/workout.js';
import Leaderboard from '../models/leaderboard.js';
const run = async () => {
    try {
        await connectDB();
        console.log('Clearing existing collections...');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            Workout.deleteMany({}),
            Leaderboard.deleteMany({}),
        ]);
        console.log('Creating users...');
        const users = await User.create([
            { name: 'Alice Johnson', email: 'alice@example.com', profile: { age: 29, heightCm: 165, weightKg: 62 } },
            { name: 'Bob Martin', email: 'bob@example.com', profile: { age: 34, heightCm: 178, weightKg: 82 } },
            { name: 'Carol Lee', email: 'carol@example.com', profile: { age: 24, heightCm: 170, weightKg: 58 } },
        ]);
        console.log('Creating teams...');
        const teams = await Team.create([
            { name: 'Downtown Runners', description: 'Local running group', members: [users[0]._id, users[1]._id] },
            { name: 'Sunrise Strength', description: 'Morning strength training', members: [users[2]._id] },
        ]);
        console.log('Creating workouts...');
        const workouts = await Workout.create([
            { name: 'Full Body Circuit', description: 'A quick full-body circuit', exercises: [{ name: 'Push-ups', reps: 12, sets: 3 }, { name: 'Squats', reps: 15, sets: 3 }] },
            { name: '5K Run Plan', description: 'Interval run workout', exercises: [{ name: 'Warmup Jog', durationSec: 600 }, { name: 'Intervals', durationSec: 1200 }] },
        ]);
        console.log('Creating activities...');
        const activities = await Activity.create([
            { user: users[0]._id, type: 'Run', durationMin: 32, distanceKm: 5.1, calories: 380, date: new Date() },
            { user: users[1]._id, type: 'Bike', durationMin: 45, distanceKm: 18, calories: 520, date: new Date() },
            { user: users[2]._id, type: 'Strength', durationMin: 40, calories: 300, date: new Date() },
        ]);
        console.log('Creating leaderboard entries...');
        const leaderboard = await Leaderboard.create([
            { entityType: 'User', entity: users[0]._id, score: 1200, period: 'weekly' },
            { entityType: 'Team', entity: teams[0]._id, score: 3400, period: 'weekly' },
        ]);
        console.log('Seed complete. Summary:');
        console.log(`Users: ${await User.countDocuments()}`);
        console.log(`Teams: ${await Team.countDocuments()}`);
        console.log(`Workouts: ${await Workout.countDocuments()}`);
        console.log(`Activities: ${await Activity.countDocuments()}`);
        console.log(`Leaderboard: ${await Leaderboard.countDocuments()}`);
        process.exit(0);
    }
    catch (err) {
        console.error('Seed failed', err);
        process.exit(1);
    }
};
run();
