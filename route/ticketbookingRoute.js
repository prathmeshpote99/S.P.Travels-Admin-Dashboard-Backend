const express = require("express");
const router = express.Router();
const ticketBookingController = require("../controller/ticketbookingController");

router.post("/add", ticketBookingController.addTicketBookingData);

module.exports = router;
