import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>App page for docker</h1>
            <p>count:::{count}</p>
        </div>
    );
};

export default App;
