import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import allRoutes from "../routes/index.js";
import { errorHandlerMiddleware } from "../middleware/error/errorHandlerMiddleware.js";


const createServer = () => {
    //start server
    const app = express();
    
    app.use(express.json());
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.urlencoded({ extended: true }));
    
    // to serve files from uploads directory
    app.use("/static", express.static("static"));
    
    app.use("/api", allRoutes);
    
    // Error Middleware
    app.use(errorHandlerMiddleware);
    
    return app
}

export default createServer