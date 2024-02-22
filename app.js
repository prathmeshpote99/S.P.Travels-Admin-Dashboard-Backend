require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./db/conn");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(bodyParser.json({ limit: "100mb" }));

app.use(
  cors({
    origin: "https://sptravels-admin.vercel.app",
  })
);

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

const ticketBookingRoute = require("./route/ticketbookingRoute");
app.use("/addcustomer", ticketBookingRoute);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
