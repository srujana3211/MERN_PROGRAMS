const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const header = req.headers["authorization"];

  if (!header) return res.send("Access denied");

  const token = header.split(" ")[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch {
    res.send("Invalid token");
  }
}

module.exports = verifyToken;