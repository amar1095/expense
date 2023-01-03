import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, { useState }  from 'react';


function ExpenseItem(pros){
   const [title, setTitle] = useState(pros.title);
     
    const clickHandler =() =>{
        console.log(title);

    setTitle('changed!!!');  
      console.log("====changed");
    };
    
    return (
    <div className="expense-item">
  <ExpenseDate  date={pros.date}/>
        <div className="expense-item__description"> 
        <h2> {pros.title}</h2>
        <div className="expense-item__price">
            {pros.amount}
        </div>

        </div><button onClick={clickHandler}>change title</button>
        
    </div>
    );
}

export default ExpenseItem;