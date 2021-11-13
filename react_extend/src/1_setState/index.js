import React, {Component} from 'react';

class Parent extends Component {
    state = {count: 0}
    add = () => {
        // 对象式setState
        this.setState({count: this.state.count + 1}, ()=>{
            console.log(this.state.count)       // render执行之后才会进行调用
        })

        // 函数式setState
        this.setState((preState, props) => ({count: preState.count + 1}), () => {
            console.log(this.state.count)       // render执行之后才会进行调用
        })
        // 函数式setState的简写方式
        this.setState(state => ({count: state.count + 1}), ()=>{
            console.log(this.state.count)       // render执行之后才会进行调用
        })

    }
    render() {
        console.log('render...')
        return (
            <div>
                <button onClick={this.add}>Increase</button> &nbsp;
                {this.state.count}
            </div>
        );
    }
}

export default Parent;