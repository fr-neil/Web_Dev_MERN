import React from 'react';
import Card from '../Card/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = React.useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;