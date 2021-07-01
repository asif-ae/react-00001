import React, { Fragment, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Default Expenses
const dummyExpenses = [
  { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2021, 8, 14) },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 3, 12) },
  { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 6, 12) },
]

function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {

    // Add new expense with previous state snapshot function (Recomanded)
    setExpenses( (previousExpenses) => {
      return (
        [ expense, ...previousExpenses ]
      )
    });

  }


  return (
    <Fragment>
      <div className="bg-dark text-white">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses items={expenses}></Expenses>
      </div>
    </Fragment>
  );
}

export default App;
