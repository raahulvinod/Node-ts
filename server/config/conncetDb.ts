import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI || '';

    await mongoose.connect(mongoURI).then((data) => {
      console.log(`Database connected with ${data.connection.host}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDb;
