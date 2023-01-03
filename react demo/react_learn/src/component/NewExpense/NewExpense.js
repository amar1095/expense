import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (pros) => {

  const[isEditing,setIsEditing] = useState(false);

  const saveExapnsedataHandler=(enteredExpenseData) =>{

    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    pros.onAddExpense(expenseData);
    setIsEditing(false);

  };
  const editHandler = () => {
         setIsEditing(true);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
};
    return <div className='new-expense'>
      {!isEditing && <button onClick={editHandler}> add new expenses </button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExapnsedataHandler} onCancel={stopEditHandler}/>}
    </div>

}

export default NewExpense;
