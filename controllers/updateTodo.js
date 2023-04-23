// import schemea

const Todo = require("../models/Todo");

// route handler

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description } = req.body;

    const todoUpdate = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: todoUpdate,
      messaage: "ToDo data is Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Server error",
      messaage: error.message,
    });
  }
};
