import { Schema, model } from 'mongoose';
const UserSchema = new Schema({
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
export default model('User', UserSchema);
