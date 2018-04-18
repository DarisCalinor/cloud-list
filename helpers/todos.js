const db = require("../models");

exports.getTodos = (req, res) => {
  db.Todo.find()
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
    .then(newTodo => {
      res.status(201).json(newTodo);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.getTodo = (req, res) => {
  db.Todo.findById(req.params.todoId)
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.updateTodo = (req, res) => {
  db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.deleteTodo = (req, res) => {
  db.Todo.findByIdAndRemove(req.params.todoId)
    .then(() => {
      res.json({ message: "Todo is deleted." });
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = exports;
