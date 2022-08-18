const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connection Successful"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("casino-front/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "casino-front", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 9000, async () => {
  console.log("backend server is up on PORT " + process.env.PORT || 9000);
});
