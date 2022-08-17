const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 9000, async () => {
  console.log("backend server is up on PORT " + process.env.PORT || 9000);
});
