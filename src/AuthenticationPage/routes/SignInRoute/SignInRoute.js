import React from 'react';
import { inject, observer } from "mobx-react";
import { observable } from "mobx";
import { SignInPage } from "../../components/SignInPage";
import { getAccessToken } from "../../../utils/StorageUtils";
import { withRouter, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../../utils/AuthUtils";

@inject('authStore')
@observer
class SignInRoute extends React.Component{
    @observable userName="";
    @observable password="";
    @observable errorMessage;

    onChangeUserName=(event)=>{
        this.userName=event.target.value;
    }

    onChangePassword=(event)=>{
        this.password=event.target.value;
    }

    onEnterKeyPress =(event)=> {
        if (event.key === "Enter") {
        this.onClickSignIn();
        }
    };
    

    onClickSignIn=async()=>{
        const {history}=this.props;
        if(this.userName==='' || this.userName===undefined)
        this.errorMessage="please enter userName"
        else if(this.password==='' || this.password===undefined)
        this.errorMessage="please enter password"
        else {
            this.errorMessage="";
            await this.props.authStore.userSignIn();
            if(getAccessToken())
            history.replace('/online-shopping-app')
        }  
    }

    renderProductsPage = () => {
        return <Redirect to={'/online-shopping-app'} />;
    };

    render(){
        if (isLoggedIn()) {
            return this.renderProductsPage();
        }
        
        return <SignInPage userName={this.userName}
                password={this.password}
                onClickSignIn={this.onClickSignIn}
                errorMessage={this.errorMessage}
                onChangePassword={this.onChangePassword}
                onChangeUserName={this.onChangeUserName}
                onEnterKeyPress={this.onEnterKeyPress}
        />
    }
}

export default withRouter(SignInRoute)