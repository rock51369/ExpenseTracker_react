import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{ //here we create a function which will
        //take our object as a parameter and combine it in a new object for furthur usage
        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };//here we are binding it.
        /*
        This is used to pass data from children to the parent, we basically use a function
        with a parameter and then pass the data through that parameter and just join it in a new 
        */

        //console.log(expenseData);
        props.onAddExpense(expenseData);
        //here we pass the object as a parameter

        setIsEditing(false);
        
    };

    const[isEditing,setIsEditing] = useState(false);

    const startEditingHandler = () =>{
        setIsEditing(true);
    };

    const stopEditingHandler =() =>{
        setIsEditing(false);
    };

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {/* If in the above and below lines if the isediting is false then the upper one will show
            if it is false then the lower one will show */}
            {/* Here onCancel is a pointer which points to the function and onCancel is passesd to the function */}
            {isEditing && <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
            {/* the name of the prop onSaveExpenseData is passesd to ExpenseForm and 
            to use it we do props.onSaveExpenseData()*/}
        </div>
    );
};

export default NewExpense;