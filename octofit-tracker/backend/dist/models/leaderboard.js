import { Schema, model } from 'mongoose';
const LeaderboardSchema = new Schema({
    entityType: { type: String, enum: ['User', 'Team'], required: true },
    entity: { type: Schema.Types.ObjectId, required: true, refPath: 'entityType' },
    score: { type: Number, required: true },
    period: { type: String },
});
export default model('Leaderboard', LeaderboardSchema);
