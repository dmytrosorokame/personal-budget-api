const expensesModel = require("../models/expenses-model");

const getExpenses = (req, res) => {
  const expenses = expensesModel.getAll();

  res.status(200).send(expenses);
};

const createExpense = (req, res) => {
  const { amount, description } = req.body;

  if (!amount || !description) {
    return res.status(400).send("Missing amount or description.");
  }

  const expense = expensesModel.add({ amount, description });

  res.status(201).send(expense);
};

module.exports = {
  getExpenses,
  createExpense,
};
