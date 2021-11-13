import React, {Component} from 'react';
// 引入connect用于连接UI组件与Redux
import {connect} from "react-redux"
// 引入action
import {increment, decrement, incrementAsync} from "../../redux/action/count";

// 定义UI组件
class Count extends Component {
    // state = {count: 0}

    increment = () =>{
        const {value} = this.selectedNumber
        this.props.increment(value * 1)
    }
    decrement = () =>{
        const {value} = this.selectedNumber
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () =>{
        const {value} = this.selectedNumber
        if (this.props.count % 2 === 1) {
            this.props.increment(value * 1)
        }
    }
    incrementAsync = () =>{
        const {value} = this.selectedNumber
        this.props.incrementAsync(value * 1, 1000)
    }
    render() {
        return (
            <div>
                <h3>这里是Person组件</h3>
                <h4>当前求和为：{this.props.count}，下方组件人数为：{this.props.persons}</h4>
                <select ref={c => this.selectedNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>计数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count: state.count, persons: state.person.length}),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)