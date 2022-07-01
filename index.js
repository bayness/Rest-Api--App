require("dotenv").config();
const { json } = require("express");
const express = require("express");

const mongoose = require("mongoose");
const mongoConnect = require("./config/config");
const usersRouter = require("./routes/Router");
const errorHandler = require("./ErrorHandler/errorHandler");
mongoConnect();

const port = process.env.PORT || 8800;
const app = express();

app.use(json());

//routes
//user routes
app.use("/", usersRouter);

//db events
const db = mongoose.connection;

//on connect event
db.on("open", () => {
  console.log("database connected successfully...");
});

//start listening to port
app.listen(port, () => {
  console.log(`live on localhost:${port}`);
});
//error handling middleware
app.use(errorHandler);
