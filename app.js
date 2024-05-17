import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import eventRouter from "./routes/events.js";
// import logger from 'morgan';

dotenv.config();
const app = express();
app.use(cors());
// app.use(logger(formatsLogger));
app.use(express.json());
app.use("/api/events", eventRouter);
export default app;
