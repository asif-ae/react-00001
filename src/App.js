import React, { Fragment } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  return (
    <Fragment>
      <div className="bg-dark text-white">
        <NewExpense></NewExpense>
        <Expenses></Expenses>
      </div>
    </Fragment>
  );
}

export default App;
