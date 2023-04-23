// import schemea

const Todo = require("../models/Todo");

// route handler

exports.createTodo = async (req, res) => {
  try {
    // extract title from

    const { title, description } = req.body;

    // create a new to do obkect

    const response = await Todo.create({ title, description });

    // send a json res with success flag

    res.status(200).json({
      success: true,
      data: response,
      messaage: "entry created ",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: true,
      data: "Server error",
      messaage: error.message,
    });
  }
};
