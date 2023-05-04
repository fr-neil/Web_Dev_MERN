import ExpenseDate from './ExpenseDate'
import Card from '../Card/Card'
import './ExpenseItem.css'
function ExpenseItem(props) {

    return (
        // we only can return one root element, so wrapping more elements in div container and parenthesis would help
        <Card className='expense-item'>
            {/* if given component is empty we can write it as self closing 
            (no content between opening and closing tag*/}
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
        </Card >
    )
}

// Exporting given module or component so it can be reused in multiple places
export default ExpenseItem