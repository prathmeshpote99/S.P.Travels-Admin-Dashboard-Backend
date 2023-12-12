const ticketBookingModel = require("../model/ticketbookingModel");

const addTicketBookingData = async (req, res) => {
  try {
    const customerDetails = new ticketBookingModel({
      prnNo: req.body.prnNo,
      docNo: req.body.docNo,
      corporate: req.body.corporate,
      agentName: req.body.agentName,
      bookedBy: req.body.bookedBy,
      modifiedBy: req.body.modifiedBy,
      bookName: req.body.bookName,
      receiptNo: req.body.receiptNo,
      bookingDate: req.body.bookingDate,
      bookingTime: req.body.bookingTime,
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      alternatePhoneNo: req.body.alternatePhoneNo,
      address: req.body.address,
      pickupDate: req.body.pickupDate,
      pickupTime: req.body.pickupTime,
      pickupPoint: req.body.pickupPoint,
      pickupAddress: req.body.pickupAddress,
      passengerRemark: req.body.passengerRemark,
      area: req.body.area,
      trip: req.body.trip,
      airportType: req.body.airportType,
      flightNo: req.body.flightNo,
      flightDate: req.body.flightDate,
      flightETA: req.body.flightETA,
      departDate: req.body.departDate,
      departTime: req.body.departTime,
      totalSeats: req.body.totalSeats,
      ticketAmount: req.body.ticketAmount,
      discountAmount: req.body.discountAmount,
      cgstAmt: req.body.cgstAmt,
      sgstAmt: req.body.sgstAmt,
      totalAmount: req.body.totalAmount,
      pickupCharges: req.body.pickupCharges,
    });
    const saveDetails = await customerDetails.save();
    res.status(200).send({
      msg: "Save Data",
      bookingDetails: saveDetails,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = { addTicketBookingData };
