const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const PORT = 3000;
const SECRET = "mysecretkey";

// Temporary database (in-memory)
const users = [];

// 📝 REGISTER
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    username,
    password: hashedPassword
  });

  res.send("User registered");
});

// 🔐 LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.send("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.send("Wrong password");
  }

  // create token
  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

  res.json({ token });
});

// 🔒 PROTECTED ROUTE
app.get("/profile", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.send("Access denied");
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    res.send("Welcome " + decoded.username);
  } catch (err) {
    res.send("Invalid token");
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});