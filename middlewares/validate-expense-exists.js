const expensesModel = require("../models/expenses-model.js");

const validateExpenseExists = async (req, res, next) => {
  const { expenseId } = req.params;

  const expense = await expensesModel.get(Number(expenseId));

  if (!expense) {
    return res.status(404).send("Expense not found.");
  }

  req.expense = expense;

  next();
};

module.exports = validateExpenseExists;
