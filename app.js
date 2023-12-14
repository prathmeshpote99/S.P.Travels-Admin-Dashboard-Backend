require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

const ticketBookingRoute = require("./route/ticketbookingRoute");
app.use("/addcustomer", ticketBookingRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port ${process.env.PORT}`);
});
