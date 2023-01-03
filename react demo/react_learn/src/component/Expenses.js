import { useState } from "react";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpesesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(pros){

    const[filterYear,selFilterYear] = useState('2020');
    const filterChangeHandler= selectedYear =>{
        selFilterYear(selectedYear);
    };

    const filterExpenses = pros.item.filter(expense =>{
        return expense.date.getFullYear().toString() === filterYear;
    }
        );

       
        
    return (
     <div className="expenses">
         <ExpensesFilter  selected={filterYear} onChangeFilter={filterChangeHandler}/>
         <ExpensesChart expense={filterExpenses} /> 
        <ExpesesList item={filterExpenses} />
      </div>
    );


};

export default Expenses;