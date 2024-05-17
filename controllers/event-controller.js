import EventModel from "../model/EventModel.js";
// import { userJoiSignin } from "../model/AuthModel.js";
// import {
//   httpError,
//   validateHashPassword,
//   generateToken,
// } from "../helpers/index.js";
// import bcrypt from "bcrypt";

const getAllEvents = async (req, res, next) => {
  //   console.log("req", req.body);
  const result = await EventModel.find();
  res.json(result);
  console.log("res", res);
};

const getParticipants = async (req, res, next) => {
  //   console.log("req", req.body);
  const result = await EventModel.find();
  res.json(result);
  console.log("res", res);
};
const addEvent = async (req, res) => {
  console.log("first", req.body);
  const result = await EventModel.create(req.body);
  res.status(201).json(result);
};

export default { getParticipants, getAllEvents, addEvent };
