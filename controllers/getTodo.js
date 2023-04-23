// import model

const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    // fetch all to do items from db

    const todos = await Todo.find({});

    // console.log(todos);

    // respose

    res.status(200).json({
      success: true,
      data: todos,
      messaage: "ToDo data is fetched",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: true,
      data: "Server error",
      messaage: error.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const TodoById = await Todo.findById({ _id: id });

    // data for given id is not found

    if (!TodoById) {
      return res.status(404).json({
        success: false,
        message: "No Data Found",
      });
    }

    res.status(200).json({
      success: true,
      data: TodoById,
      message:` ToDo data based on ID ${id} is fetched`,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      data: "Server error",
      message: error.message,
    });
  }
};
