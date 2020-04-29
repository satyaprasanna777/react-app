import React from 'react'
import { inject, observer } from "mobx-react";
import { observable } from "mobx";

@inject('authStore')
@observer
class SignInPage extends React.Component{
    @observable userName="";
    @observable password="";
    @observable errorMessage;

    componentDidMount(){
        this.props.authStore.userSignIn();
    }

    onChangeUserName=(event)=>{
        this.userName=event.target.value;
    }

    onChangePassword=(event)=>{
        this.password=event.target.value;
    }

    onClickSignIn=()=>{

    }

    render(){
        return(
            <SignInPage>
                <p>SignIn</p>
                <input type="text" placeholder="UserName" onChange={this.onChangeUserName}/>
                <input type="password" placeholder="Password" onChange={this.onChangePassword}/>
                <button onClick={this.onClickSignIn}>SignIn</button>
            </SignInPage>
        )
    }
}

export default SignInPage;