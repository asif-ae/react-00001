import React, { Fragment } from 'react';
import Card from "../../UI/Card/Card";
import ExpenseItem from '../ExpenseItem/ExpenseItem'; 

const Expenses = () => {

  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2021, 8, 14) },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 3, 12) },
    { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 6, 12) },
  ]

  return (
    <Fragment>
      <Card className="container-fluid">
        <div className="h100">
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
      </Card>
    </Fragment>
  );
};

export default Expenses;