import { baseURL } from "../../../OnlineShoppingApp/constants/constants";
import { create } from "apisauce";
import { networkCallWithApisauce } from "../../../utils/APIUtils";
import endPoints from "../endPoints";
import { apiMethods } from "../../../constants/APIConstants";

const AuthUrl=baseURL
class AuthApi{
    api
    constructor() {
        this.api = create({
            baseURL: AuthUrl
        })
    }
    getCookieToken() {
        return networkCallWithApisauce(
            this.api,
            endPoints.cookieToken,
            {},
            apiMethods.get)
    }
}

export default AuthApi;