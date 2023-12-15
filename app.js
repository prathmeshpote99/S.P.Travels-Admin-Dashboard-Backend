require("dotenv").config();
// const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("Database Connected Successfully");
//   })
//   .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

const ticketBookingRoute = require("./route/ticketbookingRoute");
app.use("/addcustomer", ticketBookingRoute);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
