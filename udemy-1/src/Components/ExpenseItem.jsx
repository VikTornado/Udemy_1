import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)

    // let title = props.title
    const clickHandler = () => {
        setTitle("Updateted!")
        // title = "Updated!"
        // console.log(title)
    }
    return (
        <Card
            className={"w-full flex items-center justify-between text-4xl bg-black/10 shadow-xl my-6 p-6 rounded-2xl"}>
            <div className={"w-full flex items-center"}>
                <ExpenseDate/>
                <div className={"px-6 text-white"}>{title}</div>
            </div>
            <div className={"flex items-center"}>
                <div className={"px-6 py-2 bg-orange-800 rounded-2xl border-2 mx-8"}>
                    ${props.amount}
                </div>
                <button onClick={clickHandler}>Click</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;