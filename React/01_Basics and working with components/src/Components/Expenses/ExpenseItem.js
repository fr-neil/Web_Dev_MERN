import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 9);
  // const expenseTitle = "car insurance";
  // const expenseAmount = 249.67;

  //   return (
  //     <div className="expense-item">
  //       <div>9th June 2002</div>
  //       <div className="expense-item__description">
  //         <h2>New Investment</h2>
  //         <div className="expense-item__price">$10000000</div>
  //       </div>
  //     </div>
  //   );

  //   return (
  //     <div className="expense-item">
  //       <div>{expenseDate.toISOString()}</div>
  //       <div className="expense-item__description">
  //         <h2>{expenseTitle}</h2>
  //         <div className="expense-item__price">${expenseAmount}</div>
  //       </div>
  //     </div>
  //   );
  // }

  // below, the className is the css class, we are applying css styles on jsx components using ClassName tag, cause class is a rserved word in js so do in react

  //   return (
  //     <div className="expense-item">
  //       <ExpenseDate date={props.date}></ExpenseDate>
  //       <div className="expense-item__description">
  //         <h2>{props.title}</h2>
  //         <div className="expense-item__price">${props.amount}</div>
  //       </div>
  //     </div>
  //   );
  // }
  // in above code, we used new react concept called props(properties), using react props we can share data betn components in react

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
