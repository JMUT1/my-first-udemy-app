import "./ExpenseForm.css";
import React, {useState} from "react";

const ExpenseForm = () => {

    const [entertitle, setEnteredTitle] = useState("");
    const [enterAmount, setEnteredAmount] = useState("");
    const [enterDate, setEnteredDate] = useState("");

    // useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    };

    const amoutChangeHandler = (event)=>{
        setEnteredAmount (event.target.value);
    };

    const dateChangerHandler = (event)=>{
        setEnteredDate (event.target.value);
    };

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: entertitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }

        console.log(expenseData);
        
        setEnteredTitle("");
        setEnteredAmount ("");
        setEnteredDate ("");
    };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={entertitle} onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__controls">
          <label>Amout</label>
          <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={amoutChangeHandler} />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={enterDate} onChange={dateChangerHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
