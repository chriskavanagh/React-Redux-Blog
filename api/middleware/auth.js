const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token)
    return res.status(401).json({ msg: "Access denied. No token provided." });

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Invalid Token" });
  }
};
