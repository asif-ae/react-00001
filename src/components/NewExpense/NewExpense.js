import React, { Fragment } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="p-3">
          <ExpenseForm></ExpenseForm>
        </div>
      </div>
    </Fragment>
  );
};

export default NewExpense;