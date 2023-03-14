import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const uri = process.env.MONGO_URI




export const db = async () => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB', error));
  } catch (error) {
    console.error(error)
  }
};
