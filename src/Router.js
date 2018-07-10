import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
    return (
        <Router>
            {/* Root Scene 只能有一個 */}
            {/* 每個 Scene 都必須要設定 key，這個 key 會變成 Actions 中的一個 method */}
            {/* Ex: Actions.employeeList() in actions/index.js */}
            <Scene key='root' hideNavBar>
                {/* 其它這個 app 中有的 Scene 都會擺在這個 root 底下 */}
                <Scene key='auth'> 
                    <Scene key='login' component={LoginForm} title='Please Login' initial /> 
                </Scene>    
                <Scene key='main'>
                    <Scene key='employeeList' component={EmployeeList} title='Employees' /> 
                </Scene>
            </Scene>    
        </Router>    
    );
};

export default RouterComponent;