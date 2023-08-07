import { useState } from "react";
//import ExpenseItem from "./components/Expenseitem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];//this is an object called expenses and we access it bu expenses[0].title to get index 0's title and this index.title is called
// an constructor 

function App() {

  const[expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('In App JS');
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
    //here we have to change the state of an object by adding a new object inside it
    //In this case we update the value of expenses in const[expenses,setExpenses] 
    // so we use this function way. in this the expense we already revieve the prevState or 
    //the prev array and we juxt append the new expense by return [expense(new one),...prevExpense(old array)]

  }

  return (
    <div>
      {/* <ExpenseItem 
      amount={expenses[0].amount} //these are called parameters and are passed with a variable = another variable as CONSTRUCTORS
      title={expenses[0].title} // or title = "toilet paper"; here title are objects children or variables
      date={expenses[0].date}></ExpenseItem>
      <ExpenseItem
      amount={expenses[1].amount} 
      title={expenses[1].title} 
      date={expenses[1].date}></ExpenseItem>
      <ExpenseItem
      amount={expenses[2].amount} 
      title={expenses[2].title} 
      date={expenses[2].date}></ExpenseItem>
      <ExpenseItem
      amount={expenses[3].amount} 
      title={expenses[3].title} 
      date={expenses[3].date}></ExpenseItem> */}
      <NewExpense  onAddExpense={addExpenseHandler}/>

      <Expenses dataitem={expenses}></Expenses> {/*you need to put it in another object like dataitem = {expenses}*/}
    </div>
  );
}

export default App;
