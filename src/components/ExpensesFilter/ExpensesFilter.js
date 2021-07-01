import React, { Fragment } from 'react';
import Card from '../UI/Card/Card';

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const handleChange = ( event ) => {
    onChangeFilter(event.target.value)
  }
  return (
    <Fragment>
      <Card className="container">
        <div className="p-3 border border-3 round-30 my-3">
          <div className="row p-0 m-0">
            <div className="col-6">
              <div className="text-success bg-white rounded-pill py-1 text-center">
                <h3>Filter by Year</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="">
                <select defaultValue={selected} className="form-select form-select mb-3" aria-label=".form-select-lg example" onChange={handleChange}>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default ExpensesFilter;