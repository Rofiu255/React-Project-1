import React from 'react'
import ExpensesForm from './ExpensesForm'
import "./NewExpenses.css"

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    console.log(expenseData)
    props.onAddExpense(expenseData)
  }
  
  return (
    <div className='new-expense'>
      <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpenses
