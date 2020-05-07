import React from 'react'
import { observer } from "mobx-react";
import { SignInPageContainer,Heading,UserName,Password,SignInButton,ErrorMessage } from "./styleComponents";

@observer
class SignInPage extends React.Component{

    render(){
        let {userName,password,onClickSignIn,errorMessage,onChangeUserName,onChangePassword,onEnterKeyPress}=this.props;
        return(
            <SignInPageContainer>
                <Heading>SignIn</Heading>
                <UserName type="text" value={userName} placeholder="UserName" onChange={onChangeUserName}/>
                <Password type="password" value={password} placeholder="Password" onChange={onChangePassword}/>
                <SignInButton onClick={onClickSignIn} onKeyPress={onEnterKeyPress}>SignIn</SignInButton>
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </SignInPageContainer>
        )
    }
}

export default SignInPage;