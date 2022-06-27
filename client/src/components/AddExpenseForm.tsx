import { useState } from "react";
import { useAddExpenseMutation } from "../features/api/apiSlice";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface ExpenseForm {
  title: string;
  amount: number;
  date: Date;
}

const AddExpenseForm = () => {
  const [form, setForm] = useState({
    title: "",
    amount: 1,
    date: new Date(),
  });

  const [error, setError] = useState(null);

  const [addExpense] = useAddExpenseMutation();

  const handleClick = async (expense: ExpenseForm) => {
    setError(null);

    addExpense(expense)
      .unwrap()
      .catch((error) => setError(error.data.error));

    setForm({ title: "", amount: 1, date: new Date() });
  };

  return (
    <div className="flex flex-col space-y-4">
      {error && <p className="bg-red-500 text-white p-1 text-sm">{error}</p>}
      <input
        className="rounded-xl p-2 outline-emerald-400"
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        className="rounded-xl p-2 outline-emerald-400"
        type="number"
        placeholder="amount"
        min={1}
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
      />
      <DayPicker
        mode="single"
        selected={form.date}
        onSelect={(day, date: Date) => setForm({ ...form, date })}
      />
      <p>You picked: {format(form.date, "PP")}</p>
      <button
        className="bg-emerald-400 font-black text-white py-2 rounded-xl"
        onClick={() => handleClick(form)}
      >
        Add
      </button>
    </div>
  );
};

export default AddExpenseForm;
