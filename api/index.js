const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("DB connected");
});

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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

const Message = mongoose.model("Message", messageSchema);

app.use(express.json());

app.post("/messages", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server Started!!");
});
