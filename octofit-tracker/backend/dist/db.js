import mongoose from 'mongoose';
export const connectDB = async () => {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
    await mongoose.connect(uri);
    console.log(`Connected to MongoDB at ${uri}`);
};
export default connectDB;
