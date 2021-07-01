import React, { Fragment } from 'react';
import Card from "../../UI/Card/Card";
import ExpenseItem from '../ExpenseItem/ExpenseItem'; 


const Expenses = ({ items }) => {

  return (
    <Fragment>
      <Card className="container-fluid">
        <div className="h100">

          {/* Dynamicly item components using map() */}
          {
            items.map(expense => {
              return (
                <ExpenseItem
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}

                  // The Key Prop
                  key={expense.id}
                ></ExpenseItem>
              )
            })
          }

          {/* Single Item Hard Coded Components */}
          {/* <ExpenseItem
            title={items[0].title}
            amount={items[0].amount}
            date={items[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={items[1].title}
            amount={items[1].amount}
            date={items[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={items[2].title}
            amount={items[2].amount}
            date={items[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={items[3].title}
            amount={items[3].amount}
            date={items[3].date}
          ></ExpenseItem> */}
        </div>
      </Card>
    </Fragment>
  );
};

export default Expenses;