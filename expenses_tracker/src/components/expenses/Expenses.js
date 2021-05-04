import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Cards";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amout}
            date={expense.date}
          ></ExpenseItem>
        );
      })} */}

      {filteredExpenses.map((expen) => (
        <ExpenseItem
          key={expen.id}
          title={expen.title}
          amount={expen.amount}
          date={expen.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
