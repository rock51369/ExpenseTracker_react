import "./ExpenseDate.css";
//this is splitting the components into more components
/* we use it just like any other component just it extends not the main component*/
function ExpenseDate(props)
{
    let month = props.date.toLocaleString('en-US',{month:'long'});//here props is the constructor
    let day = props.date.toLocaleString('en-US',{day:'2-digit'});//we need to declare the date in the main file 
    let year = props.date.getFullYear();//to get the date form Expenseitem
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;