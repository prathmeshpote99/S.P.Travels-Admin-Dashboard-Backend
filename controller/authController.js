const authModel = require("../model/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

//Signup User
const signupUser = async (req, res) => {
  try {
    const { name, email, password, corporate } = req.body;

    //Check if user already exists in the database
    const user = await authModel.findOne({ email });
    if (user) {
      return res.status(400).send({ msg: "User already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = new authModel({
      name,
      email,
      password: hashPassword,
      corporate,
    });

    const saveUser = await newUser.save();

    return res
      .status(200)
      .send({ msg: "User created successfully", data: saveUser });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

//Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if the user is already exists or not
    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "User does not exists" });
    }

    //check password is valid
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send({ msg: "Please enter valid password" });
    }

    //create token data
    const tokenData = {
      id: user._id,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).send({
      msg: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

//Get Loggedin User By Id
const getCostomerById = async (req, res) => {
  try {
    const data = await authModel.findOne({ _id: req.params.id });
    if (data) {
      return res.status(200).send({ msg: "Get customer successfully", data });
    } else {
      return res.status(400).send({ msg: "User not found" });
    }
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
};

module.exports = { signupUser, loginUser, getCostomerById };
