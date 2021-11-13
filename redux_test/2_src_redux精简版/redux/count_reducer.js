/*
* 1. 该文件时用于创建要给为Count组件服务的reducer，reducer的本质就是一个函数
* 2. reducer函数会接收到两个参数，分别为：之前的状态（preState）、动作对象（action）
* */
const initState = 0     // 初始化状态
export default function countReducer(preState = initState, action){
    // console.log(preState, action)
    // if (preState == undefined) return 0      // 状态初始化
    const {type, data} = action
    switch (type) {
        case 'increment':   // 如果为加
            return preState + data
        case 'decrement':   // 如果为减
            return preState - data
        default:            // 初始化状态
            // return 0
            return preState
    }
}