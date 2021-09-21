import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  /*const [userInput, setUserInput] = useState({
      enterTitle: '',
      enterAmount: '',
      enterDate: ''
  });*/

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);

    /* setUserInput({
            ...userInput, setEnterTitle: event.target.value,
        }); */

    /* setUserInput((prevState) =>{
            return {...prevState, setEnterTitle: event.target.value};
        }); */
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    /* setUserInput({
            ...userInput, setEnterAmount: event.target.value,
        }); */
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    /*setUserInput({
        ...userInput, setEnterDate: event.target.value,
    }); */
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    console.log(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Item</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
