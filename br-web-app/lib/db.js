import mongoose from 'mongoose';

const MONGO_URL = "mongodb+srv://giasinbenchafsi:0Q0vXbPPiKZZk9rY@bullets-requiem.w9lsozc.mongodb.net/?retryWrites=true&w=majority&appName=bullets-requiem";

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
