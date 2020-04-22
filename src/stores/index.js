import UserService from '../services/UserService/index.api'
import TodoFixtureService from '../services/TodoService/index.fixture'
import CounterStore from './CounterStore'
import UserStore from './UsersStore'
import TodoStoreWithApi from './TodoStoreWithApi'

const counterStore = new CounterStore()
const userService = new UserService()
const userStore = new UserStore(userService)

const todoFixtureService = new TodoFixtureService()
const todoStoreWithApi = new TodoStoreWithApi(todoFixtureService)

export default {
    counterStore,
    userStore,
    todoStoreWithApi
};
