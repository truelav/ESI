import express from "express";
import morgan from "morgan";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//start server
const PORT = process.env.PORT ?? 8000;
const app = express();

//middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
