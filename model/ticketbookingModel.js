const mongoose = require("mongoose");

const ticketBookingScheama = new mongoose.Schema({
  prnNo: {
    type: Number,
    required: true,
  },
  docNo: {
    type: Number,
    required: true,
  },
  corporate: {
    type: String,
    required: true,
  },
  agentName: {
    type: String,
    required: true,
  },
  bookedBy: {
    type: String,
    required: true,
  },
  modifiedBy: {
    type: String,
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  receiptNo: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  bookingTime: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  alternatePhoneNo: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  pickupTime: {
    type: String,
    required: true,
  },
  pickupPoint: {
    type: String,
    required: true,
  },
  pickupAddress: {
    type: String,
    required: true,
  },
  passengerRemark: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  trip: {
    type: String,
    required: true,
  },
  airportType: {
    type: String,
    required: true,
  },
  flightNo: {
    type: String,
    required: true,
  },
  flightDate: {
    type: Date,
    required: true,
  },
  flightETA: {
    type: String,
    required: true,
  },
  departDate: {
    type: Date,
    required: true,
  },
  departTime: {
    type: String,
    required: true,
  },
  collectionThrough: {
    type: String,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  ticketAmount: {
    type: Number,
    required: true,
  },
  discountAmount: {
    type: Number,
    required: true,
  },
  cgstAmt: {
    type: Number,
    required: true,
  },
  sgstAmt: {
    type: Number,
    required: true,
  },
  pickupCharges: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TicketBookingData", ticketBookingScheama);
