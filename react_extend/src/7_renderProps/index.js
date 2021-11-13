import React, {Component} from 'react';

class Parent extends Component {
    render() {
        return (
            <div>
                <h4>This is Parent Component</h4>
                <A render={(data) => <B data={data}/>}/>
            </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <div>
                <h4>This is A Component</h4>
                {this.props.render({name: "Testing..."})}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h4>This is B Component</h4>
                <h5>{`收到父组件传递的参数name为：${this.props.data.name}`}</h5>
            </div>
        );
    }
}

/*class Parent extends Component {
    render() {
        return (
            <div>
                <h4>This is Parent Component</h4>
                <A>
                    <B/>
                </A>
            </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <div>
                <h4>This is A Component</h4>
                {this.props.children}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h4>This is B Component</h4>
            </div>
        );
    }
}*/

export default Parent;