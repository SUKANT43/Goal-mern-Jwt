const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password'); // Fixed select syntax
      if (!req.user) {
        return res.status(400).json({ msg: "User not found" });
      }

    next();
    } catch (err) {
      return res.status(400).json({ msg: "Token is not valid", error: err.message });
    }
  }

  if (!token) {
    return res.status(400).json({ msg: "There is no token" });
  }
};

module.exports = { protect };
