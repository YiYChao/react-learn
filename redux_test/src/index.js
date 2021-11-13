import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import {Provider} from "react-redux"

ReactDOM.render(
    // 使用Provider包裹APP并传入store，目的是为了APP的所有子组件都能收到store
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

// 监测redux状态改变以重新渲染组件
// store.subscribe(() => {
//     ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
// })
