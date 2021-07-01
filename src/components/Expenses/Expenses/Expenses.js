import React, { Fragment, useState } from 'react';
import Card from "../../UI/Card/Card";
import ExpenseItem from '../ExpenseItem/ExpenseItem'; 
import ExpensesFilter from '../../ExpensesFilter/ExpensesFilter';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = ( selectedYear ) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter( expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  })

  console.log(filteredYear, filteredExpenses.length);

  const expensesNotFoundMessage = <h3 className="text-center text-danger">No Expenses Found!</h3>;

  let expenseContents;
  if (filteredExpenses.length > 0) {
    // Dynamicly item components using map()
    expenseContents = filteredExpenses.map(expense => {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}

          // The Key Prop
          key={expense.id}
        ></ExpenseItem>
      )
    });
  }
  console.log(expenseContents);

  return (
    <Fragment>
      <Card className="container-fluid">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <div className="h100">

          {
            expenseContents || expensesNotFoundMessage
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