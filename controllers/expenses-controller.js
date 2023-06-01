const expensesModel = require("../models/expenses-model");

const getExpenses = (req, res) => {
  const expenses = expensesModel.getAll();

  res.status(200).send(expenses);
};

const getExpenseById = (req, res) => {
  const { expenseId } = req.params;

  const expense = expensesModel.get(Number(expenseId));

  if (!expense) {
    return res.status(404).send("Expense not found.");
  }

  res.status(200).send(expense);
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

  const expense = expensesModel.get(Number(expenseId));

  if (!expense) {
    return res.status(404).send("Expense not found.");
  }

  const updatedExpense = expensesModel.update(Number(expenseId), {
    amount,
    description,
  });

  res.status(200).send(updatedExpense);
};

module.exports = {
  getExpenses,
  getExpenseById,
  createExpense,
  getTotalAmountOfExpenses,
  updateExpense,
};
