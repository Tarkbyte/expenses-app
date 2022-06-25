const express = require("express");
const {
  getExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

// Get all expenses
router.get("/", getExpenses);

// Get single expensee
router.get("/:id", getExpense);

// Store an expensee
router.post("/", createExpense);

// Delete an expense
router.patch("/:id", updateExpense);

// Delete an expense
router.delete("/:id", deleteExpense);

module.exports = router;
