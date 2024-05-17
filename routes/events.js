import { Router } from "express";
import eventController from "../controllers/event-controller.js";
// import { addUserJoiShema } from '../models/AuthModel.js';
const router = Router();
const { getParticipants } = eventController;

router.get("/participants", getParticipants);
// router.get("/:id", getUserById);
// router.post("/signup", signup);
// router.post("/signin", signin);

export default router;
