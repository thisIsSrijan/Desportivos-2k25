import mongoose from "mongoose";

async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connection extablished");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
