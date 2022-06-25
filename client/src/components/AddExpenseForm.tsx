import { useState } from "react";
import { useAddExpenseMutation } from "../features/api/apiSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      Title:
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      Amount:
      <input
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
      />
      Date:
      <DatePicker
        selected={form.date}
        onChange={(date: Date) => setForm({ ...form, date: date })}
      />
      <button onClick={() => handleClick(form)}>Add</button>
    </div>
  );
};

export default AddExpenseForm;
