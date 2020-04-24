import React from 'react';
import { observer } from 'mobx-react';

import loginStore from '../../stores/LoginStore'

@observer
class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(loginStore.token)
        return (
            <div style={{display:"flex",flexDirection:"column",margin:"150px"}}>
                <input type="text" placeholder="enter your name"/>
                <input type="password" placeholder="password"/>
                <button onClick={loginStore.generateToken}>Login</button>
            </div>)
    }
}

export default LoginPage;
