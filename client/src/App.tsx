import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";

const App = () => {
  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen app-bg">
        <div className="bg-white/30 backdrop-blur-sm p-10 rounded-xl w-full mx-80 border border-white border-opacity-10 shadow flex justify-between">
          <div className="w-full">
            <p className="text-3 xl font-black">Expenses:</p>
            <ExpensesList />
          </div>
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default App;
