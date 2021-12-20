import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const showFormHandler = (event) => {setIsExpanded(true)};

  const closeFormHandler = (event) => {
      setIsExpanded(false);
  }

  if (!isExpanded) {
    return (
      <div className="new-expense">
        <button onClick={showFormHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm closeForm={closeFormHandler} addExpenseHandler={props.addExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
