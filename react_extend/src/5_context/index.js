import React, {Component} from 'react';

// 创建一个Context对象（放在需要通信的组件都可以访问到的地方）
const MyContext = React.createContext()

class Parent extends Component {
    state = {name: 'Blob'}
    changeName = () => {
        this.setState({name: 'Kervin'})
    }

    render() {
        return (
            <div>
                <h4>This is Parent Component</h4>
                <button onClick={this.changeName}>Change Name</button>
                {/* 向后代组件传递参数， 属性名称只能叫 value */}
                <MyContext.Provider value={{name: this.state.name, age: 13}}>
                    <Child/>
                </MyContext.Provider>
            </div>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                <h4>This is Child Component</h4>
                <Grand1/>
                <Grand2/>
            </div>
        );
    }
}

class Grand1 extends Component {
    // 声明需要引用context，名称只能叫 contextType
    static contextType = MyContext
    render() {
        console.log(this.context)
        return (
            <div>
                <h4>This is Grand1 Component</h4>
                <h5>{`Get Value: name: ${this.context.name}, name: ${this.context.age}`}</h5>
            </div>
        );
    }
}

function Grand2() {
    return (
        // 函数组件通过Consumer接受 祖组件 传递的参数
        <MyContext.Consumer>
            {value => {
                return (
                    <div>
                        <h4>This is Grand2 Component</h4>
                        <h5>{`Get Value: name: ${value.name}, name: ${value.age}`}</h5>
                    </div>
                )
            }}
        </MyContext.Consumer>
    )
}

export default Parent;