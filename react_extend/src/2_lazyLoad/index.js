import React, {Component, lazy, Suspense} from 'react';

// 通过React的lazy函数配合import()函数动态加载路由组件  => 路由组件代码会被分开打包
const Home = lazy(() => import("../A"))
const DashBoard = lazy(() => import("../B"))


class Parent extends Component {
    render() {
        return (
            <div>
                {/* 通过<Suspense> 指定在加载得到路由打包文件前希纳是一个自定义的loading界面 */}
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Switch>
                        <Route path={"/xxx"} component={Home}>首页</Route>
                        <Route path={"/qqqq"} component={DashBoard}>Dashboard</Route>
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

export default Parent;