import React from 'react';

function SetState() {
    // 使用state
    const [count, setCount] = React.useState(0);

    // 函数回调
    function addNumber() {
        setCount(count + 2)
    }

    return (
        <div>
            <h4>This is Function Component: {count}</h4>
            <button onClick={addNumber}>Add Two</button>
            <button onClick={() =>setCount(count + 1)}>Add One</button>
        </div>
    )
}

export default SetState
