import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  {/*STATELESS COMPONENT*/}
  /*const [title, seTitle] = useState(props.title)

  const clickHandler = () => {
    seTitle("updated!");
    console.log("Updated!"); 
  };*/
  
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__decription ">
        {/*<h2>{title}</h2>*/} {/*for the stateless useState above*/}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/*<button onClick={clickHandler}>Click button</button>*/}
      </div>
    </Card>
  );
}

export default ExpenseItem;
