//we will work on the files inside src folder which are our most imp files
// whenever we create a new file we need to add it to the new folder named components
// Always start new file name with capital letter

import ExpenseItem from "./Components/Expenses/ExpenseItem";

function App() {
  const expenses = [
    { title: "car insurance-mini", amount: 150, date: new Date(2024, 9, 5) },
    { title: "car insurance-regular", amount: 850, date: new Date(2023, 9, 7) },
    { title: "car insurance-flex", amount: 4000, date: new Date(2022, 5, 4) },
    {
      title: "car insurance-loved",
      amount: 25000,
      date: new Date(2021, 12, 10),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
