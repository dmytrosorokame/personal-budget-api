const express = require("express");

const router = express.Router();

const {
  getExpenses,
  getExpenseById,
  createExpense,
  getTotalAmountOfExpenses,
  updateExpense,
} = require("../controllers/expenses-controller");

router.get("/", getExpenses);
router.get("/total", getTotalAmountOfExpenses);
router.get("/:expenseId", getExpenseById);
router.post("/", createExpense);
router.patch("/:expenseId", updateExpense);

module.exports = router;
