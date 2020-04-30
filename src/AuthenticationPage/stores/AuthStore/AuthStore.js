import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class AuthStore{
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    @observable authAPIService;	
    @observable access_token;

    constructor(authService){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null;
        this.authAPIService=authService;
        this.access_token="";
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
        this.access_token=authResponse[0].access_token;
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