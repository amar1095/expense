import './ExpenseForm.css';
import React, { useState }  from 'react';


const ExpenseForm =(pros) =>{

    const [enteredTitle,setInterTitle] = useState('');
    const titleChangeHandler = (event) =>{
        setInterTitle(event.target.value);
    };

    const [enteredAmount,setInterAmount] = useState('');
    const amountChangeHandler = (event) =>{
        setInterAmount(event.target.value);
    };

    const [enteredDate,setInterDate] = useState('');
    const dateChangeHandler = (event) =>{
        setInterDate(event.target.value);
    };
    const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData={
       title: enteredTitle,
       amount : enteredAmount,
        date: new Date(enteredDate)
    };
    pros.onSaveExpenseData(expenseData)
    setInterTitle('');
    setInterAmount('');
    setInterDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>amount</label>
                    <input type='number'  min="0.01" step="0.01"  value={enteredAmount} onChange = {amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'  min="2020-01-01" max="2023-12-30"  date={enteredDate} onChange={dateChangeHandler} />
                </div>
                </div>
                <div className='new-expense__actions'>
                    <button type ='button'  onClick={pros.onCancel}> cancel </button>
                    <button type='submit'>add Expenses</button>
            </div>
        </form>

    );

}

export default ExpenseForm;
