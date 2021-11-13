import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {
    // state = {count: 0}
    /*componentDidMount() {
        store.subscribe(() => {
            this.setState({})       // 触发重新render
        })
    }
    // 为避免代码重复，可将上述操作移动至App组件的渲染*/

    increment = () =>{
        const {value} = this.selectedNumber
        // const {count} = this.state
        // this.setState({count: count + value * 1})
        store.dispatch({type: 'increment', data: value * 1})
    }
    decrement = () =>{
        const {value} = this.selectedNumber
        // const {count} = this.state
        store.dispatch({type: 'decrement', data: value * 1})
    }
    incrementIfOdd = () =>{
        const {value} = this.selectedNumber
        // const {count} = this.state
        const count = store.getState()
        if (count % 2 === 1){
            // this.setState({count: count + value * 1})
            store.dispatch({type: 'increment', data: value * 1})
        }
    }
    incrementAsync = () =>{
        const {value} = this.selectedNumber
        // const {count} = this.state
        setTimeout(() => {
            // this.setState({count: count + value * 1})
            store.dispatch({type: 'increment', data: value * 1})
        }, 500)
    }
    render() {
        return (
            <div>
                <h3>当前求和为：{store.getState()}</h3>
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

export default Count;