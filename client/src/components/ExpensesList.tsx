import {
  useGetExpensesQuery,
  useDeleteExpenseMutation,
} from "../features/api/apiSlice";
import { format } from "date-fns";
import {
  CashIcon,
  CalendarIcon,
  TrashIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

const ExpensesList = () => {
  const { data: expenses } = useGetExpensesQuery();
  const [deleteExpense] = useDeleteExpenseMutation();

  const handleDeleteExpense = (_id: string) => {
    deleteExpense(_id);
  };

  return (
    <div className="pr-5">
      {expenses?.map((expense) => (
        <div
          key={expense._id}
          className="rounded-xl shadow-md my-2 bg-white p-3 space-y-1"
        >
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-neutral-400">
              {expense.title}
            </p>
            <div className="flex items-center">
              <button>
                <PencilAltIcon className="w-5 h-5 text-orange-300 mr-1" />
              </button>
              <button onClick={() => handleDeleteExpense(expense._id)}>
                <TrashIcon className="w-5 h-5 text-red-400" />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <CashIcon className="w-5 h-5 text-emerald-400 mr-1" />
            {expense.amount}
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 text-emerald-400 mr-1" />
            <p>{format(new Date(expense.date), "PP")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
