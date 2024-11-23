import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let filteredContent = <p>No expense is Found</p>;

  if (props.items.length === 0) {
    return <h2 className="expense-list_fallback">Found No Expenses.</h2>;
  }
  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
