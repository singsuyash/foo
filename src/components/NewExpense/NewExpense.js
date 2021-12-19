import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpenseHandler={props.addExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
