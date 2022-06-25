import { useGetExpensesQuery } from "../features/api/apiSlice";
import { format } from "date-fns";

const ExpensesList = () => {
  const { data: expenses } = useGetExpensesQuery();

  return (
    <>
      {expenses?.map((expense) => (
        <div className="m-auto" key={expense._id}>
          <p>{expense.title}</p>
          <p>{expense.amount}</p>
          <p>{format(new Date(expense.date), "dd/MM/yyyy")}</p>
        </div>
      ))}
    </>
  );
};

export default ExpensesList;
