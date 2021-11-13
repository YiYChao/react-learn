import React, {Component} from "react";     // 默认暴露React和分别暴露Component
// const {Component} = React        // 解构赋值
import Hello from "./components/Hello"
import Welcome from "./components/Welcome"
export default class App extends Component{
    render() {
        return (<div>
            <Hello/>
            <Welcome/>
        </div>)
    }
}