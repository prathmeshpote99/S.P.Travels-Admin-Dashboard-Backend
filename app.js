const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/ticket-booking-system")
  .then(console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

const ticketBookingRoute = require("./route/ticketbookingRoute");
app.use("/addcustomer", ticketBookingRoute);

app.listen(8000, () => {
  console.log("Server Running");
});
