const { createTodo } = require("../controllers/createTodo");
const { deleteToDo } = require("../controllers/deleteToDo");

const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");

const express = require("express");

const router = express.Router();

// Define API routes

router.post("/createTodo", createTodo);

router.get("/getTodos", getTodo);

router.get("/getTodos/:id", getTodoById);


router.put("/updateTodo/:id",updateTodo)

router.delete("/deleteTod/:id",deleteToDo)

module.exports = router;
