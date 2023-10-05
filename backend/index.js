import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import env from "dotenv"
import session from "express-session";
import allRoutes from "./routes/index.js";
import connectDB from "./config/db.config.js";


//start server
const PORT = process.env.PORT ?? 8888;
const app = express();
const dotenv = env.config().parsed


// session store
// const store = MongoStore.create({
//   mongoUrl: dbString,
// });
// app.use(
//   session({
//     secret: "esi-secret-123",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 1000 * 60 * 5 },
//     store: store,
//   })
// );

//middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use("/api", allRoutes);
app.use("/", (req, res) => res.send("Hello World ESI"));

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server running on port: ${PORT}`);
});
