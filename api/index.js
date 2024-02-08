const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO).then(() => {
  console.log("DB connected");
});

const messageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("message", messageSchema);

app.post("/messages", async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Please enter your email",
      });
    }
    if (!subject) {
      return res.status(400).json({
        message: "Please enter your subject",
      });
    }
    if (!message) {
      return res.status(400).json({
        message: "Please enter your message",
      });
    }
    const found = await Message.find({ email });
    if (found.length > 0) {
      return res.status(600).json({
        message: "Please wait for me to respond to your previous message",
      });
    }
    const newMessage = new Message({ email, subject, message });
    const savedMessage = await newMessage.save();
    res.status(200).json({
      message: "Message Sent Successfully. I will get back to you soon",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error. Please try contacting via social media.",
    });
  }
});

app.listen(3000, () => {
  console.log("Server Started!!");
});
