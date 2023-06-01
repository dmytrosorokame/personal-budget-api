const express = require("express");

const router = express.Router();

const {
  getExpenses,
  createExpense,
} = require("../controllers/expenses-controller");

router.get("/", getExpenses);
router.post("/", createExpense);

module.exports = router;
