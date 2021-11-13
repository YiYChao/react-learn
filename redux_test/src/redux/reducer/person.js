import {ADD_PERSON} from "../constant";

const initState = [{id: '001', name: '测试用户1', age: 13}]

export default function personReducer(preState=initState, action){
    const {type, data} = action;
    switch (type) {
        case ADD_PERSON:
            // preState.unshift(data)  // 此处不能这样写，因为对参数进行了修改，这样reducer就不是纯函数了
            return [data, ...preState]
        default:
            return preState
    }
}