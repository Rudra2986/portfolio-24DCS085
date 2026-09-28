const mongoose = require('mongoose');

// Route-specific middleware: validates :id is a valid MongoDB ObjectID
const validateTaskId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      error: "Invalid task ID format. ID must be a valid MongoDB ObjectID."
    });
  }
  next();
};

module.exports = validateTaskId;
