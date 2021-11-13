import React, {Component, Fragment} from 'react';

class Parent extends Component {
    render() {
        return (
            /* Fragment 在jsx解析后会被去除，与<>的区别在于可以设置唯一的key值 */
            <Fragment key='key001'>
                <h4>这里是一个标题</h4>
                <h5>来个副标题吧</h5>
            </Fragment>
        );
    }
}

export default Parent;