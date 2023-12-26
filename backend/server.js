import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import allRoutes from "./routes/index.js";
import { corsOptions } from "./config/cors/corsOptions.js";
import { errorHandlerMiddleware } from "./middleware/error/errorHandlerMiddleware.js";

//start server
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// to serve files from uploads directory
app.use("/static", express.static("static"));

app.use("/api", allRoutes);

// Error Middleware
app.use(errorHandlerMiddleware);

export default app