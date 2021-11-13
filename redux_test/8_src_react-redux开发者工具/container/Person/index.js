import React, {Component} from 'react';
import {connect} from "react-redux"
import {nanoid} from "nanoid"
import {createAddPersonAction} from "../../redux/action/person";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        this.props.addPerson({id: nanoid(), name, age})
        this.nameNode.value =''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h3>这里是Person组件， 上方组件和为：{this.props.he}</h3>
                <input ref={c => this.nameNode = c} placeholder="请输入名称"/>
                <input ref={c => this.ageNode = c} placeholder="请输入年龄"/>
                <button onClick={this.addPerson}>提交</button>
                <ul>
                    {this.props.persons.map(item => <li key={item.id}>{item.name + '------------' + item.age}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({persons: state.people, he: state.total}),
    {addPerson: createAddPersonAction}
)(Person)