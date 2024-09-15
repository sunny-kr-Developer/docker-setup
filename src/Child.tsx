import React from "react";

const Child = (props: any) => {
    const { gettingDataInChild } = props;
    const handleClick = () => {
        gettingDataInChild("sunny");
    };
    return (
        <div>
            <h1>child comp</h1>
            <button onClick={handleClick}>click event</button>
        </div>
    );
};

export default Child;
