import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import allRoutes from "./routes/index.js";
import cookieParser from "cookie-parser";

import Role from "./models/Role/Role.js";

//start server
const PORT = process.env.PORT ?? 8888;
const app = express();

//connect to DB
const dbString = "mongodb://127.0.0.1:27017/ESI";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbString);

    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
};

// function initial() {
//   Role.estimatedDocumentCount()
//     .then((count) => {
//       if (count === 0) {
//         new Role({
//           name: "user",
//         })
//           .save()
//           .then(() => console.log("user role creted"));

//         new Role({
//           name: "moderator",
//         })
//           .save()
//           .then(() => console.log("moderator role creted"));

//         new Role({
//           name: "admin",
//         })
//           .save()
//           .then(() => console.log("admin role creted"));
//       }
//     })
//     .catch((error) => console.log(error));
// }
// initial();

// session store
const store = MongoStore.create({
  mongoUrl: dbString,
});

//middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   session({
//     secret: "esi-secret-123",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 1000 * 60 * 5 },
//     store: store,
//   })
// );

app.use("/api", allRoutes);
app.use("/", (req, res) => res.send("Hello World ESI"));

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server running on port: ${PORT}`);
});
