import ExpenseItem from "./ExpenseItem";
import Card from "../../containers/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState(2021);

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === year
  );

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((e) => (
      <ExpenseItem key={e.id} date={e.date} title={e.title} amount={e.amount} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={year}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
