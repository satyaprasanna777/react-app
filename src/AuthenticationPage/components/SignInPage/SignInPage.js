import React from 'react'
import { observer } from "mobx-react";
import { SignInPageContainer, Heading, UserName, Password, SignInButton, ErrorMessage } from "./styleComponents";

const DislayMessaage = (props) => {
    return <div>{props.children}</div>
}

@observer
class SignInPage extends React.Component {
    userNameRef = React.createRef();
    passworRef = React.createRef();

    componentDidMount() {
        this.userNameRef.current.focus();
    }


    render() {
        let { userName, password, onClickSignIn, errorMessage, onChangeUserName, onChangePassword, onEnterKeyPress } = this.props;
        return (
            <SignInPageContainer>
                <Heading>SignIn</Heading>
                <UserName ref={this.userNameRef} type="text" value={userName} placeholder="UserName" onChange={onChangeUserName}/>
                <Password ref={this.passworRef} type="password" value={password} placeholder="Password" onChange={onChangePassword}/>
                <SignInButton onClick={onClickSignIn} onKeyPress={onEnterKeyPress}>SignIn</SignInButton>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <DislayMessaage>hello</DislayMessaage>
            </SignInPageContainer>
        )
    }
}

export default SignInPage;
