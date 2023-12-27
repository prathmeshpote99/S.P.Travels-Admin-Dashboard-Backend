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

// Allow requests only from a specific origin (e.g., http://localhost:3001)
const corsOptions = {
  origin: ["https://sptravels-admin.vercel.app", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

const ticketBookingRoute = require("./route/ticketbookingRoute");
app.use("/addcustomer", ticketBookingRoute);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
