import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { engine } from "express-handlebars";

import allRoutes from "./routes/index.js";

//start server
const PORT = process.env.PORT ?? 8000;
const app = express();

//connect to DB
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/ESI");
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
};

//middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use("/api", allRoutes);

app.use("/", (req, res) => res.send("Hello World ESI"));

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server running on port: ${PORT}`);
});
