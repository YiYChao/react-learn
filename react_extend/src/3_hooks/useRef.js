import React from 'react';

function UseRef() {
    const myRef = React.useRef()        // 声明
    // 函数回调
    function showValue() {
        // 通过ref获取输入框中的内容
        console.log(myRef.current.value)
    }

    return (
        <div>
            <h4>This is Function Component</h4>
            {/*  使用ref */}
            <input name="username" type="text" ref={myRef}/>
            <button onClick={showValue}>Show Input Value</button>
        </div>
    )
}

export default UseRef