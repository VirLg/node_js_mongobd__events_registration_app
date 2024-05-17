import EventModel from "../model/EventModel.js";
// import { userJoiSignin } from "../model/AuthModel.js";
// import {
//   httpError,
//   validateHashPassword,
//   generateToken,
// } from "../helpers/index.js";
// import bcrypt from "bcrypt";

const getParticipants = async (req, res, next) => {
  //   console.log("req", req.body);
  const result = await EventModel.find();
  res.json(result);
  console.log("res", res);
  //   const { email, password } = req.body;
  //   const user = await AuthUserModel.findOne({ email });
  //   if (user) {
  //     throw httpError(409, `${email} in use `);
  //   } else {
  //     const hashPassword = await validateHashPassword(password);
  //     const createUser = await AuthUserModel.create({
  //       ...req.body,
  //       password: hashPassword,
  //     });
  //     res.status(201).json({
  //       email: createUser.email,
  //     });
  //   }
};

export default { getParticipants };
