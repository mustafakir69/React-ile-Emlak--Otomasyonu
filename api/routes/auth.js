const User = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

//! register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json("A new user created successfully.");
  } catch (error) {
    console.error("Registration error:", error); // Log error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ error: "User not found!" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(403).json({ error: "Invalid password!" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Login error:", error); // Log error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
