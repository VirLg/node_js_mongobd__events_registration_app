import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleSaveError, runValidatorsAtUpdate } from "./hooke.js";

const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const eventSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: validateEmail,
    },
    name: {
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

eventSchema.post("save", handleSaveError);
eventSchema.pre("findOneAndUpdate", runValidatorsAtUpdate);
eventSchema.post("findOneAndUpdate", handleSaveError);

export const eventJoiAdd = Joi.object({
  email: Joi.string().pattern(validateEmail).required(),
  title: Joi.string().min(6).required(),
  date: Joi.string().min(10).required(),
});
