import { observable, action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

class UserStore {
    @observable getUsersApiStatus;
    @observable getUsersApiError;
    @observable users;
    userService

    constructor(userService) {
        this.userService = userService;
        this.init();
    }

    @action
    init() {
        this.getUsersApiStatus = API_INITIAL;
        this.getUsersApiError = null;
        this.users = [];
    }

    @action.bound
    setUsersApiResponse(users) {
        this.users = users.map((user) => user.name)
        console.log(this.users)
    }

    @action.bound
    setUsersApiError(error) {
        this.getUsersApiError = error
        console.log(error)
    }

    @action.bound
    setUsersApiStatus(apiStatus) {
        this.getUsersApiStatus = apiStatus;
    }

    @action.bound
    getUsers() {
        const usersPromise = this.userService.getUsersApi();
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setUsersApiStatus, this.setUsersApiResponse)
            .catch(this.setUsersApiError)
    }

    @action
    clearStore() {
        this.init();
    }
}

// const userService = new UserService();
// const userStore = new UserStore(userService);
// export default userStore;

export default UserStore;
