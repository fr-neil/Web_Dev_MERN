// Importing css in react file is very common thing to do.
import './ExpenseItem.css'
function ExpenseItem(props) {

    // Helper Constants
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()
    return (
        // we only can return one root element, so wrapping more elements in div container and parenthesis would help
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
        </div >
    )
}

// Exporting given module or component so it can be reused in multiple places
export default ExpenseItem