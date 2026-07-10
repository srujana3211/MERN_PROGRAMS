const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let users = [];
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.json({ message: "User registered" });
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user) return res.send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.send("Wrong password");

  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({ token });
});
module.exports = router;