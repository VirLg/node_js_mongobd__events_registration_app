import { Router } from "express";
import eventController from "../controllers/event-controller.js";
import isBodyEmpty from "../middlewares/isBodyEmpty.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
// import { addUserJoiShema } from '../models/AuthModel.js';
const router = Router();
const { getParticipants, getAllEvents, addEvent } = eventController;

router.get("/", ctrlWrapper(getAllEvents));
router.get("/participants", ctrlWrapper(getParticipants));
router.post("/add", isBodyEmpty, ctrlWrapper(addEvent));
// router.get("/:id", getUserById);
// router.post("/signup", signup);
// router.post("/signin", signin);

export default router;
