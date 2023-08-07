import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    //set EnteredTitle changes the value of the enteredTitle
    /* very important above */
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        //console.log(event.target.value);//event is just an object so to check inside it just console log it
        //like console.log(event);
        //if you want to get into specific subobjects then use event.target.value like this;
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })

        // setUserInput((prevState) => {
        //     return(...prevState,enteredTitle: event.target.value);
        // })
    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredtDate:event.target.value
        // })
    };

    const submitHandler = (event) => {
        //console.log(event);
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData); //here we pass the values to the parent

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        // here after submitting the form we change the state to ''; 
    };

    // we do onsubmit on the form because after pressing a submit button a form will emit an event
    // therefore we use on submit here
    // we put value to put the default internal value on the html element so after pressing submit
    // it should change back to it
    // onChange is very important for finding a change in any thing
    return(    
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    
    );
};

export default ExpenseFrom;