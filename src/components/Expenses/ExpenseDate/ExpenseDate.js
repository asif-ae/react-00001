import React, { Fragment } from 'react';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', {month: 'long'});
  const day = date.toLocaleString('en-US', {day: '2-digit'});
  const year = date.getFullYear();
  return (
    <Fragment>
      <div className="">
        {month}
      </div>
      <div className="">
        {day}
      </div>
      <div className="">
        {year}
      </div>
    </Fragment>
  );
};

export default ExpenseDate;