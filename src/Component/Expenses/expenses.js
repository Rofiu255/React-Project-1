import React, { useState } from "react";
import Card from "../UI/Card";
//import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHadler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  {/* let filteredContent = <p>No expense is Found</p>;

  if (filteredExpenses.length > 0){
    filteredContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.price}
        date={expense.date}
      />
    ))
  }  */}


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHadler}
      />

      <ExpenseChart expenses={filteredExpenses}/>

      {/*DYNAMIC WAY OF RENDERING LIST IN ARRAY           TOPIC 1*/}

      {/*OUTPUTING CONDITIONAL CONTENT WITH DYNAMIC WAY OF RENDERING LIST IN ARRAY    TOPIC 1a */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No expense is Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.price}
            date={expense.date}
          />
        ))
      )} */}

      {/*OUTPUTING CONDITIONAL CONTENT WITH DYNAMIC WAY OF RENDERING LIST IN ARRAY TOPIC 1b*/}
      {/* {filteredExpenses.length === 0 && <p>No expense is Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.price}
            date={expense.date}
          />
        ))} */}


      {/*OUTPUTING CONDITIONAL CONTENT WITH DYNAMIC WAY OF RENDERING LIST IN ARRAY TOPIC 1b*/}

      {/*{filteredContent} */}

      {/* ANY OF THE ABOVE WAY OR THE FOLLOWING WHICH IS JUST TO MAKE THE CODE READABLE */}

      <ExpensesList items={filteredExpenses}/>

      {/* NON DYNAMIC WAY OF RENDERING
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].price}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].price}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].price}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].price}
          date={props.items[3].date}
        ></ExpenseItem>*/}
    </Card>
  );
}

export default Expenses;
