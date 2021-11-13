import React, {Component} from 'react';
import Child from "./Child"

class Parent extends Component {
    state = {hasError: ''}      // 用于标识子组件是否产生错误

    // 生命周期函数，一旦后台组件出错就会触发
    static getDerivedStateFromError(error) {
        console.log('@@@', error)
        // 在render之前触发，返回新的state
        return {hasError: error}
    }

    // 统计页面的错误，发送请求到后台去
    componentDidCatch(error, errorInfo) {
        console.log('Catch Error:', error, errorInfo,)
        console.log('此处统计错误，反馈给服务器，哟关于通过开发人员进行BUG的解决')
    }

    render() {
        return (
            <div>
                <h4>This is Parent Component</h4>
                {this.state.hasError ? <h5>当前系统繁忙，请稍后再试</h5> : <Child/>}
            </div>
        );
    }
}

export default Parent;