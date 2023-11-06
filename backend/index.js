import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import allRoutes from "./routes/index.js";
import connectDB from "./config/db.config.js";
import { corsOptions } from "./config/cors/corsOptions.js";
import { errorMiddleware } from "./middleware/error/errorMiddleware.js";

//start server
const PORT = process.env.PORT ?? 8888;
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// to serve files from uploads directory
app.use("/static", express.static("static"));

app.use("/api", allRoutes);

// Error Middleware
app.use(errorMiddleware);

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server running on port: ${PORT}`);
});
