const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const protect = async (req, res, next) => {
  let token;

  // Correct method name req.headers (lowercase 'headers')
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user without password
      req.user = await User.findById(decoded.id).select('-password'); // Fixed select syntax
      if (!req.user) {
        return res.status(400).json({ msg: "User not found" });
      }

      // Continue to next middleware
      next();
    } catch (err) {
      return res.status(400).json({ msg: "Token is not valid", error: err.message });
    }
  }

  // Move this block **inside** the main function
  if (!token) {
    return res.status(400).json({ msg: "There is no token" });
  }
};

module.exports = { protect };
