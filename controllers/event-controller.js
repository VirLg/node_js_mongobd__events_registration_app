import EventModel, { eventJoiAdd } from "../model/EventModel.js";

const getAllEvents = async (req, res, next) => {
  //   console.log("req", req.body);
  const result = await EventModel.find();
  res.json(result);
  console.log("res", res);
};

const getParticipants = async (req, res, next) => {
  //   console.log("req", req.body);
  const result = await EventModel.find();
  const title = result.map((el) => ({ name: el.name, email: el.email }));
  res.json(title);
  console.log("res", res);
};
const addEvent = async (req, res) => {
  console.log("first", req.body);
  const result = await EventModel.create(req.body);
  res.status(201).json(result);
};

const toSort = async (req, res, next) => {
  console.log("req", req.body);
  await EventModel.find().sort({ name: "descending" });
};
export default { getParticipants, getAllEvents, addEvent, toSort };
