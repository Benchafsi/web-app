import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

const dbConnect = async () => {
  // Connect to the database
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB:', error.message);
  }
}

export default dbConnect;
