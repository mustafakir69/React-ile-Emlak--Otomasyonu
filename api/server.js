const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const port = 5005;

// routes

const authRoute = require("./routes/auth.js");
const RealEstateRouter = require('./routes/realEstate');


dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());



app.use("/api/auth",authRoute);
app.use('/api/realEstate', RealEstateRouter);


app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});