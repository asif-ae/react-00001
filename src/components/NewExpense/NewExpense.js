import React, { Fragment } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = ({ onAddExpense }) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (parseInt(Math.random() * 10000000000000000)).toString(),
    };
    console.log(expenseData);

    onAddExpense(expenseData);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="p-3">
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
      </div>
    </Fragment>
  );
};

export default NewExpense;