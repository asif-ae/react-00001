import React, { Fragment } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="bg-dark text-white h100">
          <h1>Let's get started!</h1>
          <ExpenseItem></ExpenseItem>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
