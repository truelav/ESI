import mongoose from "mongoose";
import env from "dotenv"
import MongoStore from "connect-mongo";

const dotenv = env.config()
const devConnection = process.env.MONGO_DB_STRING;
const prodConnection = process.env.DB_STRING_PROD;

const connectDB = async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(devConnection);
  
      console.log("Connected to the DB");
    } catch (err) {
      console.log(err);
    }
};

export default connectDB