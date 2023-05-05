import React, { useState } from "react";
import './ExpenseForm.css'


const ExpenseForm = () => {

    // this can be used as well but there is one more way to handle more than one state in our application
    // const [enteredTitle, setEnteredTitle] = React.useState('');
    // const [enteredAmount, setEnteredAmount] = React.useState('');
    // const [enteredDate, setEnteredDate] = React.useState('');
    // const titleChangeHandler = (e) => {
    //     setEnteredTitle(e.target.value)
    // }
    // const amountChangeHandler = (e) => {
    //     setEnteredAmount(e.target.value)
    // }
    // const dateChangeHandler = (e) => {
    //     setEnteredDate(e.target.value)
    // }


    // Both of these state handlers can be used
    // more people in industry prefer the one above, which is the seperate useState handling
    const [userInput, setUserInput] = useState({
        enterdTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (e) => {
        // As we know, react schedules a re-rendering of the component, using following approach we always get the      previousState snapshot, just to update one value, which in many cases can give us outdated state
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: e.target.value
        // })

        // Safest way to ensure we always work on latest state snapshot
        setUserInput = (prevState) => {
            return {
                ...prevState,
                enteredTitle: e.target.value
            }
        }
    }

    const amountChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })
        setUserInput = (prevState) => {
            return {
                ...prevState,
                enteredAmount: e.target.value
            }
        }
    }
    const dateChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })
        setUserInput = (prevState) => {
            return {
                ...prevState,
                enteredDate: e.target.value
            }
        }
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