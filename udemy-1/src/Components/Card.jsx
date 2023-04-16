import React from 'react';

const Card = (props) => {
    return (
        <div className={"border rounded-2xl p-1 bg-black/30 text-white flex items-center my-6 px-6"}>
            {props.children}
        </div>
    );
};

export default Card;