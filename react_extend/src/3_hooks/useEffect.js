import React from 'react';
import ReactDom from 'react-dom'

function UseEffect() {
    // 使用state
    const [count, setCount] = React.useState(0);

    // 函数回调
    function addNumber() {
        setCount(count + 2)
    }
    // 卸载组件
    function umountRoot() {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }
    // 生命周期钩子
    React.useEffect(() => {
        const timer = setInterval(() => {     // 相当于componentDidMount
            setCount(count => count + 1)
        }, 1000)
        return () => {              // 相当于 componentWillUmount
            clearInterval(timer)    // 先清除定时器
        }
    }, [])     // 不写则会监测所有值, 相当于componentDidUpdate

    return (
        <div>
            <h4>This is Function Component: {count}</h4>
            <button onClick={addNumber}>Add Two</button>
            <button onClick={umountRoot}>Umount Root</button>
        </div>
    )
}

export default UseEffect
