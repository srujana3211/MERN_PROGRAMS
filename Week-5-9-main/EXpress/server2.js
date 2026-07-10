const express = require("express");
const dotenv = require("dotenv");

dotenv.config();   // load .env

const app = express();
app.use(express.json());

// routes
const authRoutes = require("./routes/auth");
const verifyToken = require("./middleware/authMiddleware");

app.use("/api/auth", authRoutes);

// protected route
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});