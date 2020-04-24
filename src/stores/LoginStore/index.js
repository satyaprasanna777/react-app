import { observable,action } from 'mobx';

class LoginStore {
    //@observable name;
    //@observable password;
    @observable token;
    constructor() {
        this.token = 0;
    }
    
    @action.bound
    generateToken(){
        this.token=1;
    }

}

let loginStore = new LoginStore();
export default loginStore;
