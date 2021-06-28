import React, { Fragment } from 'react';
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  
  return (
    <Fragment>
      <div className="container">
        <div className="p-3 border border-3 round-30 my-3">
          <div className="row p-0 m-0">
            <div className="col-3">
              <div className="text-success">
                <div className="">
                  <h3>{date.toISOString()}</h3>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="">
                <h3>{title}</h3>
              </div>
            </div>
            <div className="col-2">
              <div className="border border-3 round-30 text-center bg-success">
                <h3>${amount}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseItem;