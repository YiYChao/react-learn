/*
* 该文件专门用于暴露一个store对象，整个应用只有一个store对象
* */
// 引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware, combineReducers} from "redux";
// 引入为Count组件服务的reducer
import countReducer from "./reducer/count";
import thunk from "redux-thunk"
import personReducer from "./reducer/person";
// 引入开发者工具
import {composeWithDevTools} from "redux-devtools-extension"

const allReducers = combineReducers({
    total: countReducer,
    people: personReducer
})

// 暴露store
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))