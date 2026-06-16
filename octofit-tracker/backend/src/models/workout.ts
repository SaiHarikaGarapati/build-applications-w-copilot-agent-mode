import { Schema, model, Document } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  description?: string;
  exercises: { name: string; reps?: number; sets?: number; durationSec?: number }[];
  createdAt: Date;
}

const WorkoutSchema = new Schema<IWorkout>({
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

export default model<IWorkout>('Workout', WorkoutSchema);
