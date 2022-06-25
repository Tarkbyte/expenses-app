import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";

const App = () => {
  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen app-bg">
        <div className="bg-white/40 backdrop-blur-sm p-10 rounded-xl w-full mx-96 border border-white border-opacity-10 shadow">
          <h4>Expenses</h4>
          <ExpensesList />

          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default App;
