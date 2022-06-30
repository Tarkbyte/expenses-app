import { useState } from "react";

import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";
import Toggle from "./components/Toggle";

const App = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen app-bg">
        <div className="bg-white/30 backdrop-blur-sm p-10 rounded-xl w-full mx-80 border border-white border-opacity-10 shadow flex justify-between">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <p className="font-black uppercase">
                Your expenses will appear here:
              </p>
              <Toggle enabled={enabled} setEnabled={setEnabled} />
            </div>
            <ExpensesList enabled={enabled} />
          </div>
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default App;
