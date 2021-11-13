import React, {Component} from 'react';

class Child extends Component {
    // state = {students : [{id: '001', name: 'Tom'}]}
    state = {students : ""}
    render() {
        return (
            <div>
                <h4>This is Child Component</h4>
                {this.state.students.map(item => <li key={item.id}>{item.name}</li>)}
            </div>
        );
    }
}

export default Child;