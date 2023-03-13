const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

const app = express();
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
