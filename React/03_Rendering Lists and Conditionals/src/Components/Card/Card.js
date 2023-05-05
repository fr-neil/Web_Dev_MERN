import React from 'react';
import './Card.css';
function Card(props) {
    const classes = 'card ' + props.className;
    // value of this children tag will always be what we have between this Card(which we used as wrapper in ExpenseItems.js file) 
    // This children tag is always given by react regardless we pass it or not, it;s always there 
    return <div className={classes}>{props.children}</div>
}

export default Card
