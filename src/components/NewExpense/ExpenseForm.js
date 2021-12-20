import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const closeForm = () => {
    setTitle("");
    setDate("");
    setAmount("");
    props.closeForm();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addExpenseHandler({
      id: Math.random(),
      title: title,
      date: new Date(date),
      amount: amount,
    });
    closeForm();
  };

  const resetHandler = (event) => {
    closeForm();
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={dateChangeHandler}
            min="2021-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
