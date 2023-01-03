import './ExpenseDate.css';


function ExpenseDate(pros){


    const month=pros.date.toLocaleString('en-US',{month:'long'});
    const day=pros.date.toLocaleString('en-US',{day:'2-digit'});

    const year=pros.date.getFullYear();

    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{day}</div>
        <div className="expense-date__day">{year}</div>
        </div>
    );

}

export default ExpenseDate;