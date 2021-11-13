import React, {Component} from "react";
import hello from  './index.module.css';    // 样式模块化：文件名包含.module，变量接收导入

export default class Hello extends Component {
    render() {
        return <h1 className={hello.title}>Hello</h1>
    }
}