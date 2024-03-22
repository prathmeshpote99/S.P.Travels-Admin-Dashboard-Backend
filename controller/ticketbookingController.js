require("dotenv").config();
const nodemailer = require("nodemailer");
const Razorpay = require("razorpay");
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
      collectionThrough: req.body.collectionThrough,
      totalSeats: req.body.totalSeats,
      ticketAmount: req.body.ticketAmount,
      discountAmount: req.body.discountAmount,
      cgstAmt: req.body.cgstAmt,
      sgstAmt: req.body.sgstAmt,
      pickupCharges: req.body.pickupCharges,
      totalAmount: req.body.totalAmount,
      createdAt: new Date(),
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

const getCustomers = async (req, res) => {
  const getData = await ticketBookingModel.find();
  try {
    res.status(200).send(getData);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateTicketBookingData = async (req, res) => {
  try {
    const updatedDetails = await ticketBookingModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
        modifiedAt: new Date(),
      },
      { new: true }
    );
    res.status(200).send({
      msg: "Update Successful",
      bookingDetails: updatedDetails,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const deleteTicketBookingData = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCustomer = await ticketBookingModel.findByIdAndDelete({
      _id: id,
    });
    res.status(200).send({
      msg: "Delete Successful",
      bookingDetails: deleteCustomer,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const getCustomerById = async (req, res) => {
  try {
    const data = await ticketBookingModel.findOne({ _id: req.params.id });
    if (data) {
      res.status(200).send({ msg: "User details", data });
    } else {
      res.status(400).send({ msg: "User doesn't exist" });
    }
  } catch (err) {
    res.status(500).send({ msg: err });
  }
};

const paymentGateway = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.YOUR_RAZORPAY_KEY_ID,
      key_secret: process.env.YOUR_RAZORPAY_KEY_SECRET,
    });

    const options = {
      type: "link",
      amount: req.body.amount, // amount in smallest currency unit
      currency: "INR",
      description: "Ticket Booking",
      customer: {
        name: req.body.fullName,
        email: req.body.email,
      },
    };

    // Use await here to wait for the order to be created
    const order = await instance.invoices.create(options);

    // Send an email to the customer with the payment link
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "Payment Link",
      text: `Click here to pay: ${order.short_url}\nTotal Amount: ${req.body.amount}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).send({
      msg: "Payment is successful",
      paymentLink: order.short_url,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = {
  addTicketBookingData,
  getCustomers,
  updateTicketBookingData,
  deleteTicketBookingData,
  getCustomerById,
  paymentGateway,
};
