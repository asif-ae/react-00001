import React, { Fragment } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {

  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e2", title: "New TV", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e4", title: "New Desk (Wooden)", amount: 294.67, date: new Date(2021, 2, 28) },
  ]

  console.log(expenses)
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="bg-dark text-white h100">
          <h1>Let's get started!</h1>
          <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date}
          ></ExpenseItem>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
