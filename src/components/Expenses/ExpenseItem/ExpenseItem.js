import React, { Fragment, useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

const ExpenseItem = ({ title, amount, date }) => {
  const [myTitle, setMyTitle] = useState(title);

  const clickHandler = () => {
    setMyTitle('updated');
  }
  return (
    <Fragment>
      <Card className="container">
        <div className="p-3 border border-3 round-30 my-3">
          <div className="row p-0 m-0">
            <div className="col-3">
              <div className="text-success bg-white rounded-pill py-1 text-center">
                <ExpenseDate
                  date={date}
                ></ExpenseDate>
              </div>
            </div>
            <div className="col-5">
              <div className="">
                <h3>{myTitle}</h3>
              </div>
            </div>
            <div className="col-2">
              <div className="border border-3 round-30 text-center bg-success">
                <h3>${amount}</h3>
              </div>
            </div>
            <div className="col-2">
              <div className="border border-3 round-30 text-center bg-success">
                <button onClick={clickHandler}>Change Title</button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default ExpenseItem;