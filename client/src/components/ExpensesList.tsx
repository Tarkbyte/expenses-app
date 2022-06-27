import { useGetExpensesQuery } from "../features/api/apiSlice";
import { format } from "date-fns";
import { convertCentsToEuros } from "../utils/numbers";

const ExpensesList = () => {
  const { data: expenses } = useGetExpensesQuery();

  return (
    <>
      {expenses?.map((expense) => (
        <div className="m-auto" key={expense._id}>
          <p>{expense.title}</p>
          <p>{convertCentsToEuros(expense.amount)}</p>
          <p>{format(new Date(expense.date), "PP")}</p>
        </div>
      ))}
    </>
  );
};

export default ExpensesList;
