import ExpenseItem from "./Expenseitem";
import './ExpensesList.css';

const ExpensesList = props => {
     //this is fine in jsx to write the code outside the return statement

    if(props.items.length === 0)
    {
        return(
            <h2 className="expenses-list__fallback">Found no Expense</h2>
        )
    }

    return(
        <ul className="expenses-list">
            {
                props.items.map((expense) => 
                (
                    <ExpenseItem
                    key={expense.id}
                    amount={expense.amount}
                    title={expense.title}
                    date={expense.date}
                    />
                ))
            }
        </ul>
    );

};

export default ExpensesList;