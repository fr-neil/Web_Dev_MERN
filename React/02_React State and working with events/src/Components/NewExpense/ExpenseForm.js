import React, { useState } from "react";
import './ExpenseForm.css'


const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = React.useState('');
    const [enteredAmount, setEnteredAmount] = React.useState('');
    const [enteredDate, setEnteredDate] = React.useState('');
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    return (
        <div>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2022-02-31" max="2025-02-31" onChange={dateChangeHandler} />
                    </div>
                </div>
            </form>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div >
    )
}

export default ExpenseForm