import { Schema, model } from 'mongoose';
const WorkoutSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    exercises: [
        {
            name: { type: String, required: true },
            reps: Number,
            sets: Number,
            durationSec: Number,
        },
    ],
    createdAt: { type: Date, default: () => new Date() },
});
export default model('Workout', WorkoutSchema);
