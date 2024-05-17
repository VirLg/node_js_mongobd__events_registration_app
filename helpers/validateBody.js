import { httpError } from "./index.js";
const validateBody = (contactAddShcema) => {
  const func = (req, res, next) => {
    try {
      const { error } = contactAddShcema.validate(req.body);
      if (error) {
        return next(
          httpError(404, `invalid required ${error.details[0].path} field`)
        );
      }
      return next();
    } catch (error) {
      console.log("errorVal", error);
      next(error);
    }
  };
  return func;
};
export default validateBody;
