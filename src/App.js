import React, { useState } from "react";
import "./App.css";
import Expenses from "./Component/Expenses/expenses";
import NewExpenses from "./Component/NewExpenses/NewExpenses";

const DUMMY_Expenses = [
  {
    id: "e1",
    date: new Date(2021, 4, 23),
    title: "car Insurance",
    price: 123.5,
  },
  {
    id: "e2",
    date: new Date(2021, 4, 5),
    title: "House rent",
    price: 130.5,
  },
  {
    id: "e3",
    date: new Date(2021, 11, 21),
    title: "School fee",
    price: 24.5,
  },
  {
    id: "e4",
    date: new Date(2024, 0, 5),
    title: "Food",
    price: 17.5,
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_Expenses)

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    
    //setExpenses([expense, ...expenses])
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };
  //return React.createElement(
  //  'div',
  //  {},
  //  React.createElement('h2', {}, 'Lets get started'),
  //  React.createElement(Expenses, {items:expenses})
  //)

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <h2>Lets get started</h2>
      <Expenses items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
