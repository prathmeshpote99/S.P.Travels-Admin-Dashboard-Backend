const express = require("express");
const router = express.Router();
const ticketBookingController = require("../controller/ticketbookingController");

// Add Ticket Booking
router.post("/add", ticketBookingController.addTicketBookingData);

// Get Ticket Booking
router.get("/find", ticketBookingController.getCustomers);

// Get User details by ID
router.get("/user/:id", ticketBookingController.getCustomerById);

// Update Ticket Booking
router.put("/update/:id", ticketBookingController.updateTicketBookingData);

// Delete Ticket Booking
router.delete("/delete/:id", ticketBookingController.deleteTicketBookingData);

// Payment
router.post("/payment", ticketBookingController.paymentGateway);

module.exports = router;
