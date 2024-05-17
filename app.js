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
app.use((req, res) => {
  res.status(404).json({ message: "Not found!!!!!!!" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Error Server" } = err;
  res.status(status).json({ message });
});
export default app;
