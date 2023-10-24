import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from "dotenv";
import allRoutes from "./routes/index.js";
import connectDB from "./config/db.config.js";
import { corsOptions } from "./config/cors/corsOptions.js";
import { errorMiddleware } from "./middleware/error/errorMiddleware.js";
import multer from "multer";

//start server
const PORT = process.env.PORT ?? 8888;
const app = express();
const dotenv = env.config().parsed;

// session store
// const store = MongoStore.create({
//   mongoUrl: "mongodb://127.0.0.1:27017/ESI",
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

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", allRoutes);
// app.use("/", (req, res) => res.send("Hello World ESI"));

// EFIM

// Error Middleware
app.use(errorMiddleware);

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server running on port: ${PORT}`);
});
