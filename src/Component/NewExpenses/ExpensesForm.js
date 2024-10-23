import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  {
    /*THREE STATE INPUT STORAGE */
  }
  const [entertedTitle, setEnteredTitle] = useState("");
  const [entertedAmount, setEnteredAmount] = useState("");
  const [entertedDate, setEnteredDate] = useState("");

  {
    /*ONE STATE INPUT STORAGE */
  }
  /*const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });*/

  const titleChangeHandler = (event) => {
    {
      /* FOR THE THREE STATE INPUT STORAGE */
    }

    setEnteredTitle(event.target.value);

    {
      /*FOR THE ONE STATE INPUT STORAGE USE EITHER Of THE TWO OPTIONS BELOW */
    }

    /*setUserInput({
            ...userInput,
            enteredTitle: event.target.value
            })*/
    //NOTE THE ABOVE WAY OF ONE STATE INPUT STORAGE WILL WORK BUT
    //IT HAS THE PROBLEM OF DEPENDING ON THE PREVIOUS STATE NOT THE UPDATED LATEST STATE
    // SO USE THE FOLLOWING

    /*setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        })*/
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*setUserInput({
            ...userInput,
            enteredAmount: event.target.value
            })*/
    //NOTE THE ABOVE WAY OF ONE STATE INPUT STORAGE WILL WORK BUT
    //IT HAS THE PROBLEM OF DEPENDING ON THE PREVIOUS STATE NOT THE UPDATED LATEST STATE
    // SO USE THE FOLLOWING

    /*setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
        })*/
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*setUserInput({
            ...userInput,
            enteredDate: event.target.value
            })*/
    //NOTE THE ABOVE WAY OF ONE STATE INPUT STORAGE WILL WORK BUT
    //IT HAS THE PROBLEM OF DEPENDING ON THE PREVIOUS STATE NOT THE UPDATED LATEST STATE
    // SO USE THE FOLLOWING

    /*setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
        })*/
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entertedTitle,
      amount: entertedAmount,
      date: new Date(entertedDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entertedTitle} //THIS IS TWO-WAY BINDING, IT HELP TO CLEAR THE VALUES AFTER SUBMISSION
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entertedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2010-02-02"
            max="2022-12-31"
            value={entertedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
