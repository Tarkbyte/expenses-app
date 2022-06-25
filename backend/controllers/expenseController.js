const Expense = require("../models/expenseModel");
const mongoose = require("mongoose");

// Get all expenses
const getExpenses = async (req, res) => {
  const expenses = await Expense.find({}).sort({ createdAt: -1 });

  res.status(200).json(expenses);
};
// Get single expense
const getExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Expense not found!" });

  const expense = await Expense.findById(id);

  if (!expense) return res.status(404).json({ error: "Expense not found!" });

  res.status(200).json(expense);
};

// Store an expense
const createExpense = async (req, res) => {
  const { title, amount, date } = req.body;
  try {
    const expense = await Expense.create({
      title,
      amount,
      date,
    });

    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an expense
const updateExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Expense not found!" });

  const expense = await Expense.findByIdAndUpdate(id, { ...req.body });

  if (!expense) return res.status(404).json({ error: "Expense not found!" });

  res.status(200).json(expense);
};

// Delete an expense
const deleteExpense = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Expense not found!" });

  const expense = await Expense.findByIdAndDelete(id);

  if (!expense) return res.status(404).json({ error: "Expense not found!" });

  res.status(200).json(expense);
};

module.exports = {
  getExpenses,
  getExpense,
  createExpense,
  updateExpense,
  deleteExpense,
};
