import React, {Component, PureComponent} from 'react';

// PureComponent 效率高
class Parent extends PureComponent {
    state = {count: 0}
    adder = () => {
        this.setState((state, props) => ({count: this.state.count + 1}))
    }

    render() {
        console.log('Render Parent Component')
        return (
            <div>
                <h4>This is Parent Component: {this.state.count}</h4>
                <button onClick={this.adder}>Adder</button>
                <Child/>
            </div>
        );
    }
}

// Component效率低
class Child extends Component {
    render() {
        console.log('Render Child Component')
        return (
            <div>
                <h4>This is Child Component</h4>
            </div>
        );
    }
}


export default Parent;