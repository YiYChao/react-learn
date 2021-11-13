import React, {Component} from "react";
import welcome from './index.module.css';       // 样式模块化

export default class Welcome extends Component {
    render() {
        return <h1 className={welcome.title}>Welcome</h1>
    }
}