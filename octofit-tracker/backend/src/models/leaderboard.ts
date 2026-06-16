import { Schema, model, Document } from 'mongoose';

export interface ILeaderboard extends Document {
  entityType: 'User' | 'Team';
  entity: any;
  score: number;
  period?: string;
}

const LeaderboardSchema = new Schema<ILeaderboard>({
  entityType: { type: String, enum: ['User', 'Team'], required: true },
  entity: { type: Schema.Types.ObjectId, required: true, refPath: 'entityType' },
  score: { type: Number, required: true },
  period: { type: String },
});

export default model<ILeaderboard>('Leaderboard', LeaderboardSchema);
