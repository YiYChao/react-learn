import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

// 监测redux状态改变以重新渲染组件
store.subscribe(() => {
    ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
})
