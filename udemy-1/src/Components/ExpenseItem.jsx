import React from 'react';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

    return (
        <div className={"w-full flex items-center justify-between text-4xl bg-black/10 shadow-xl my-6 p-6 rounded-2xl"}>
            <div className={"w-full flex items-center"}>
                <ExpenseDate/>
                <div className={"px-6 text-white"}>{props.title}</div>
            </div>
            <div className={"px-6 py-2 bg-orange-800 rounded-2xl border-2 mx-8"}>
                ${props.amount}
            </div>
        </div>
    );
};

export default ExpenseItem;