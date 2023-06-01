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

router.get("/", getExpenses);
router.get("/total", getTotalAmountOfExpenses);
router.get("/:expenseId", getExpenseById);
router.post("/", createExpense);
router.patch("/:expenseId", updateExpense);
router.delete("/:expenseId", deleteExpense);

module.exports = router;
