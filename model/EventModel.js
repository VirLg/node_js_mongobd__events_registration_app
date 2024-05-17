import { Schema, model } from "mongoose";
import Joi from "joi";

const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const eventSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: validateEmail,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const EventModel = model("event", eventSchema);
export default EventModel;

export const eventJoiAdd = Joi.object({
  email: Joi.string().pattern(validateEmail).required(),
  title: Joi.string().min(6).required(),
  date: Joi.string().min(10).required(),
});
