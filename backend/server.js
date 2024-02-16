import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
// import swaggerDocument from "./swagger.json"

import allRoutes from "./routes/index.js";
import { corsOptions } from "./config/cors/corsOptions.js";
import { errorMiddleware } from "./middleware/error/errorMiddleware.js";

//start server
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Swagger Options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['server.js']
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)
console.log(swaggerDocs)

// to serve files from uploads directory
app.use("/static", express.static("static"));

app.use("/api", allRoutes);

// Error Middleware
app.use(errorMiddleware);

export default app