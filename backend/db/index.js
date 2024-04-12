const mongoose = require("mongoose");

URL = "mongodb://localhost:27017/passwordManager";

mongoose
  .connect(URL)
  .then(() => {
    console.log("Database Connected sucessfully");
  })
  .catch((err) => {
    console.log(`Database Connection error:`, err);
  });
