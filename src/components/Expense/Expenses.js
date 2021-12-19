import ExpenseItem from "./ExpenseItem";
import Card from "../../containers/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);
  const filterExpensesHandler = (filterValue) => {
    setFilteredExpenses(
      props.expenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(filterValue)
      )
    );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onExpenseFilter={filterExpensesHandler} />
      {filteredExpenses.map((e) => (
        <ExpenseItem date={e.date} title={e.title} amount={e.amount} />
      ))}
    </Card>
  );
};

export default Expenses;
