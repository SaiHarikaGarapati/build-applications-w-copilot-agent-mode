import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash?: string;
  profile?: {
    age?: number;
    heightCm?: number;
    weightKg?: number;
  };
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  profile: {
    age: Number,
    heightCm: Number,
    weightKg: Number,
  },
  createdAt: { type: Date, default: () => new Date() },
});

export default model<IUser>('User', UserSchema);
