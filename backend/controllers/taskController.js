const Task = require('../models/Task');

// GET /api/tasks
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
  } catch (err) {
    next(err);
  }
};

// GET /api/tasks/:id
exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      const err = new Error(`Task with id ${req.params.id} not found`);
      err.status = 404;
      return next(err);
    }
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};

// POST /api/tasks
exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    // Check for Mongoose validation errors
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    next(err);
  }
};

// PUT /api/tasks/:id
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!task) {
      const err = new Error(`Task with id ${req.params.id} not found`);
      err.status = 404;
      return next(err);
    }
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
    }
    next(err);
  }
};

// DELETE /api/tasks/:id
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      const err = new Error(`Task with id ${req.params.id} not found`);
      err.status = 404;
      return next(err);
    }
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};
