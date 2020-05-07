import { getAccessToken } from "./StorageUtils";

export function isLoggedIn(){
    if(getAccessToken())
    return true;
    else
    return false;
}
