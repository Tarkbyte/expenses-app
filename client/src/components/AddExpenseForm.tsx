import { useState } from "react";
import { useAddExpenseMutation } from "../features/api/apiSlice";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface ExpenseForm {
  title: string;
  amount: number;
  date: Date;
}

const AddExpenseForm = () => {
  const [form, setForm] = useState({
    title: "",
    amount: 0,
    date: new Date(),
  });

  const [addExpense] = useAddExpenseMutation();

  const handleClick = (expense: ExpenseForm) => addExpense(expense);

  return (
    <div>
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
      />
      <DayPicker
        mode="single"
        selected={form.date}
        onSelect={(day, date: Date) => setForm({ ...form, date })}
      />
      <button onClick={() => handleClick(form)}>Add</button>
    </div>
  );
};

export default AddExpenseForm;
