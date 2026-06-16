import { Schema, model } from 'mongoose';
const TeamSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: () => new Date() },
});
export default model('Team', TeamSchema);
