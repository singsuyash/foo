import ExpenseItem from "./ExpenseItem";
import Card from "../containers/Card";
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((e) => (
        <ExpenseItem date={e.date} title={e.title} amount={e.amount} />
      ))}
    </Card>
  );
}

export default Expenses;
