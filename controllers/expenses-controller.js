const expensesModel = require("../models/expenses-model");

const getExpenses = (req, res) => {
  const expenses = expensesModel.getAll();

  res.status(200).send(expenses);
};

const getExpenseById = (req, res) => {
  res.status(200).send(req.expense);
};

const createExpense = (req, res) => {
  const { amount, description } = req.body;

  if (!amount || !description) {
    return res.status(400).send("Missing amount or description.");
  }

  const expense = expensesModel.add({ amount, description });

  res.status(201).send(expense);
};

const getTotalAmountOfExpenses = (req, res) => {
  const total = expensesModel.getTotal();

  res.status(200).send({ total });
};

const updateExpense = (req, res) => {
  const { expenseId } = req.params;
  const { amount, description } = req.body;

  const updatedExpense = expensesModel.update(Number(expenseId), {
    amount,
    description,
  });

  res.status(200).send(updatedExpense);
};

const deleteExpense = (req, res) => {
  const { expenseId } = req.params;

  expensesModel.delete(Number(expenseId));

  res.sendStatus(204);
};

module.exports = {
  getExpenses,
  getExpenseById,
  createExpense,
  getTotalAmountOfExpenses,
  updateExpense,
  deleteExpense,
};
