import mongoose from "mongoose";
const { DB_HOST, PORT = 4000 } = process.env;
import app from "./app.js";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server runing. Use our API on port:4000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
