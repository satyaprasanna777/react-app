import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import Cookies from 'js-cookie'

class AuthStore{
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    @observable authAPIService;	

    constructor(authService){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null;
        this.authAPIService=authService;
    }

    @action.bound
    userSignIn(){
        const authPromise=this.authAPIService.getCookieToken();
        return bindPromiseWithOnSuccess(authPromise)
        .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
        .catch(this.setGetUserSignInAPIError)
    }

    @action.bound
    setUserSignInAPIResponse(authResponse){
        Cookies.set('access_token',authResponse.access_token);
        console.log(authResponse);
    }

    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
        console.log("error",error)
    }

    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus=apiStatus;
    }

    @action.bound
    userSignOut(){

    }
}

export default AuthStore;