import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../Card/Card'
import './ExpenseItem.css'

//UseState is nothing but a react createHook, It must only be called inside the component and not outside it nor in any nested function.
function ExpenseItem(props) {
    // Withought state our UI will never change!
    // Here, useState requires an initial value
    //It returns a function, which then we can call later to assign a new value to that variable
    //State returns an arrey, 1st element is variable itself ans 2nd element is that updating function

    return (
        // we only can return one root element, so wrapping more elements in div container and parenthesis would help
        <li>
            <Card className='expense-item'>
                {/* if given component is empty we can write it as self closing 
            (no content between opening and closing tag*/}
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>₹{props.amount}</div>
                </div>
            </Card >
        </li>
    )
}

// Exporting given module or component so it can be reused in multiple places
export default ExpenseItem