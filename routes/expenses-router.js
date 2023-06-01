const express = require("express");

const router = express.Router();

const {
  getExpenses,
  getExpenseById,
  createExpense,
  getTotalAmountOfExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenses-controller");

const validateExpenseExists = require("../middlewares/validate-expense-exists");

router.get("/", getExpenses);
router.get("/total", getTotalAmountOfExpenses);
router.get("/:expenseId", validateExpenseExists, getExpenseById);
router.post("/", createExpense);
router.patch("/:expenseId", validateExpenseExists, updateExpense);
router.delete("/:expenseId", validateExpenseExists, deleteExpense);

module.exports = router;
