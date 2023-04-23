// import schemea

const Todo = require("../models/Todo");

// route handler

exports.deleteToDo = async (req, res) => {
  try {
    // extract title from

    const { id } = req.params;

    const todoDelete = await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      messaage: "ToDo data is deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Server error",
      messaage: error.message,
    });
  }
};
