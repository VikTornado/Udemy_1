import React from 'react';
import ExpenseItem from "./Components/ExpenseItem";

const App = (props) => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: Math.floor(Math.random() * 100),
            date: new Date().getDate()
        },
        {
            id: 'e2',
            title: 'Bread',
            amount: Math.floor(Math.random() * 100),
            date: new Date().getDate()
        },
        {
            id: 'e3',
            title: 'Milk',
            amount: Math.floor(Math.random() * 100),
            date: new Date().getDate()
        },
    ]
    return (
        <div className={"w-full h-screen bg-neutral-700 py-16 px-4"}>
            <h2 className={"text-4xl font-bold text-center pb-10"}>Let's get started!</h2>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        </div>
    );
};

export default App;
