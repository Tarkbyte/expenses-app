import { useState, useEffect } from "react";

import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";
import Toggle from "./components/Toggle";
import Footer from "./components/Footer";

const App = () => {
  const currency = localStorage.getItem("currency") === "true";

  const [enabled, setEnabled] = useState<boolean>(currency);

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(enabled));
  }, [enabled]);

  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen app-bg">
        <div className="bg-white/30 backdrop-blur-sm px-10 pt-10 rounded-xl w-full mx-80 border border-white border-opacity-10 shadow">
          <div className="flex justify-between border-b-2 border-emerald-400 pb-10">
            <div className="w-full">
              <div className="flex justify-between items-center">
                <p className="font-black uppercase">
                  Your expenses will appear below:
                </p>
                <Toggle enabled={enabled} setEnabled={setEnabled} />
              </div>
              <ExpensesList enabled={enabled} />
            </div>
            <AddExpenseForm />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
