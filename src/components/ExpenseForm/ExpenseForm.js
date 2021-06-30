import React, { Fragment, useState } from 'react';

const ExpenseForm = () => {
  // Single Item State
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  // Multiple object 
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })
  

  const titleChangeHandler = (event) => {
    // Initial single state aproch
    // setEnteredTitle(event.target.value);

    // Copy the hole state and than update
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    // Get the previous state snapshot and update it. (Recomanded when you need to depending on a previous state)
    setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value, }
    })
  }

  const amountChangeHandler = (event) => {
    // Initial single state aproch
    // setEnteredAmount(event.target.value);

    // Copy the hole state and than update
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })

    // Get the previous state snapshot and update it. (Recomanded when you need to depending on a previous state)
    setUserInput((previousState) => {
      return { ...previousState, enteredAmount: event.target.value, }
    })
  }

  const dateChangeHandler = (event) => {
    // Initial single state aproch
    // setEnteredDate(event.target.value);

    // Copy the hole state and than update
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })

    // Get the previous state snapshot and update it. (Recomanded when you need to depending on a previous state)
    setUserInput((previousState) => {
      return { ...previousState, enteredDate: event.target.value, }
    })
  }

  console.log(userInput.enteredTitle, userInput.enteredAmount, userInput.enteredDate);

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }
    console.log(expenseData);

    // Get the previous state snapshot and update it. (Recomanded when you need to depending on a previous state)
    setUserInput((previousState) => {
      return { ...previousState, enteredTitle: '', enteredAmount: '', enteredDate: '', }
    })
  }


  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="p-3">
          <div className="row p-0 m-0">
            <div className="col-md-6">
              <div className="p-3">
                <div className="form-floating mb-3 text-dark">
                  <input type="text" name="title" id="title" className="form-control" placeholder="Car Wash" onChange={titleChangeHandler} value={userInput.enteredTitle} />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-3">
                <div className="form-floating mb-3 text-dark">
                  <input type="number" name="amount" id="amount" className="form-control" placeholder="0.01" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount} />
                  <label htmlFor="amount">Amount</label>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-3">
                <div className="form-floating mb-3 text-dark">
                  <input type="date" name="date" id="date" className="form-control" placeholder="mm/dd/yyyy" min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate} />
                  <label htmlFor="date">Date</label>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-3 my-1 text-center">
                <button className="btn btn-success btn-lg px-5">Add Expense</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;