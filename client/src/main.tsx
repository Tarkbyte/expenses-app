import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { expenseApi } from "./features/api/apiSlice";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={expenseApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
