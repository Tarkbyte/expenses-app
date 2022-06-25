import { useGetExpensesQuery } from "../features/api/apiSlice";

const ExpensesList = () => {
  const { data: expenses } = useGetExpensesQuery();

  return (
    <>
      {expenses?.map((expense) => (
        <div className="m-auto" key={expense._id}>
          <p>{expense.title}</p>
          <p>{expense.amount}</p>
        </div>
      ))}
    </>
  );
};

export default ExpensesList;
