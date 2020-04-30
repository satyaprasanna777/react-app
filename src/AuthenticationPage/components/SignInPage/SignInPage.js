import React from 'react'
import { inject, observer } from "mobx-react";
import { observable } from "mobx";
import { SignInPageContainer,Heading,UserName,Password,SignInButton,ErrorMessage } from "./styleComponents";
import { withRouter } from "react-router-dom";

@inject('authStore')
@observer
class SignInPage extends React.Component{
    @observable userName="";
    @observable password="";
    @observable errorMessage;
    errorMessage;

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
        if((this.userName===''&&this.password==='')||(this.userName===''&&this.password!==''))
        this.errorMessage="please enter userName"
        else if(this.userName!==''&&this.password==='')
        this.errorMessage="please enter password"
        else if(this.props.authStore.access_token!==''){
            this.props.history.replace('/online-shopping-app')
        }
    }

    render(){
        return(
            <SignInPageContainer>
                <Heading>SignIn</Heading>
                <UserName type="text" placeholder="UserName" onChange={this.onChangeUserName}/>
                <Password type="password" placeholder="Password" onChange={this.onChangePassword}/>
                <SignInButton onClick={this.onClickSignIn}>SignIn</SignInButton>
                <ErrorMessage>{this.errorMessage}</ErrorMessage>
            </SignInPageContainer>
        )
    }
}

export default withRouter(SignInPage);