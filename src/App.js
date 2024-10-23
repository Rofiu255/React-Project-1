import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Component/Expenses/expenses";
import NewExpenses from "./Component/NewExpenses/NewExpenses";
function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2005, 4, 23),
      title: "car Insurance",
      price: 123.5,
    },
    {
      id: "e2",
      date: new Date(2013, 4, 5),
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

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense)
  };


  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <h2>Lets get started</h2>
      <Expenses items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
