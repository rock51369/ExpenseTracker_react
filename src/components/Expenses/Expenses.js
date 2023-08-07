import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expense(props)
{
    const [filteredYear,setFilteredYear] = useState('2020'); //set a state
    //here filtered year is the thing whatever you put it into the brackets
    

    const filterChangeHandler = (selectedYear) => {
        // console.log('Expense.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.dataitem.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    // this filters the year and outputs it.....
    // first the filter function return a new array with the filtered array and has a function as a parameter
    // now we just check if the year given year is equal to the filtered year if true then filter it and put it
    // into the new array else do not put it. the expense is an javascript object

    
    return(
        <div>

        
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>


            {/* (***************) is an implicit return therefore it will already retrun 
            whatever it is in the brackets */}

            {/* map maps each item of the array into the other array
            with the help of an function: Function used here is an arrow function
            and it takes in a parameter expense and we use the same <ExpenseItem /> 
            format we used before to represent the array  
            map every expense object item from the array into ExpenseItem objext
            map takes in a function as a parameter and returns the value of each array
            as the return of the function
            we use expense as it is mapped into expense as a seperate object and then we take out the 
            things from expense*/}

            {/* <ExpenseItem 
            amount={props.dataitem[0].amount} //these are called parameters and are passed with a variable = another variable as CONSTRUCTORS
            title={props.dataitem[0].title} // or title = "toilet paper"; here title are objects children or variables
            date={props.dataitem[0].date}></ExpenseItem>
            <ExpenseItem
            amount={props.dataitem[1].amount} 
            title={props.dataitem[1].title} 
            date={props.dataitem[1].date}></ExpenseItem>
            <ExpenseItem
            amount={props.dataitem[2].amount} 
            title={props.dataitem[2].title} 
            date={props.dataitem[2].date}></ExpenseItem>
            <ExpenseItem
            amount={props.dataitem[3].amount} 
            title={props.dataitem[3].title} 
            date={props.dataitem[3].date}></ExpenseItem> */}
        <ExpensesChart expenses ={filteredExpenses} />
        

        <ExpensesList items = {filteredExpenses} />
        </Card>

        </div>
    );
}

export default Expense;