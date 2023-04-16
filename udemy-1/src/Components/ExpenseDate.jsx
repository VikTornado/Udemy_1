import React from 'react';
import Card from "./Card";

const ExpenseDate = () => {
    let day = new Date().toLocaleString("en-US", {day: '2-digit'})
    let month = new Date().toLocaleString("en-US", {month: "long"})
    let year = new Date().getFullYear()

    return (
        <Card className={"flex flex-col items-center"}>
            <div className={"px-2 "}>{day}</div>
            <div className={"px-2 "}>{month}</div>
            <div className={"px-2 "}>{year}</div>
        </Card>
    );
};

export default ExpenseDate;