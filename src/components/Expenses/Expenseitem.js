import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";
import Card from "../UI/Card";
// function ExpenseItem() {
//     return (
//             <h2>
//                 Expense Item is here!!
//             </h2>
//     )
// }
// ONLY ONE ROOT ELEMENT SHOULD BE THERE INSIDE THE FUNCTION EXAMPLE DIVVV
//ALSO TO INSERT DYNAMIC DATA IN THE HTML USE {} IN IT
//IT WILL NOT WORK WITH DATA CONSTRUCTORS EXAMPLE expenseData
//now adding props it is like properties or parameters to a function but instead of million parameters
//we add only one and that becomes an oblect for example parameter is "props" therefore we use 
//props.title to get title from the parameter in the main app.js 

function ExpenseItem(props) {
    // const expenseDate = new Date().toISOString();
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.36;

    // let month = props.date.toLocaleString('en-US',{month:'long'});
    // let day = props.date.toLocaleString('en-US',{day:'2-digit'});
    // let year = props.date.getFullYear();


    const [title,setTitle] = useState(props.title);// this is setstate function
    //this can update the page making it dynamic. to use it first import { useState } from "react";
    // then on which element we want the change to happen we use it like useState(props.title)
    //we use props.title because we want to change the title.
    //Now since it returns an array , the first element is the value itself and the next one is
    // is a function through which we can change the value 

    const clickHandler = () => { //this is an arrow function 
        setTitle('Updated!!');// here we call the state updating function with the value as the
        // parameter to which we want it to be changed
        console.log(title);
    }
    return (

        <li>
            <Card className="expense-item">
                {/* <div >
                    {props.date.toISOString()}
                </div> */}
                {/* <div>
                    {month}
                </div>
                <div>
                    {day}
                </div>
                <div>
                    {year}
                </div> */}

                <ExpenseDate date={props.date}></ExpenseDate> {/*We can use it like <ExpenseDate /> */}
                <div className="expense-item__description ">
                    <h2>{title}</h2>
                    <div className="expense-item__price ">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change title</button> 
                {/* This is how we add an evernt handler that is onclick 
                this button on clicking will execute the function clickhandler */}
            </Card>
            </li>
    )
}
export default ExpenseItem;