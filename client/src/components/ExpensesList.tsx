import { useGetExpensesQuery } from "../features/api/apiSlice";

const ExpensesList = () => {
  const { data: expenses } = useGetExpensesQuery();

  return (
    <div>
      {expenses?.map((expense) => (
        <div key={expense._id}>
          <p>{expense.title}</p>
          <p>{expense.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
