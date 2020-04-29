
import {ProductStore}  from "../../OnlineShoppingApp/stores/ProductStore";
import CounterStore from "../../stores/CounterStore";
import UserService from "../../services/UserService/index.api";
import UserStore from "../../stores/UsersStore";
import TodoFixtureService from "../../services/TodoService/index.fixture";
import TodoStoreWithApi from "../../stores/TodoStoreWithApi";
import ProductApi from "../../OnlineShoppingApp/services/ProductService/ProductApi";
import CartStore from "../../OnlineShoppingApp/stores/CartStore/CartStore";
import AuthApi from "../../AuthenticationPage/services/AuthService/AuthApi";
import { AuthStore } from "../../AuthenticationPage/stores/AuthStore";

const counterStore = new CounterStore()
const userService = new UserService()
const userStore = new UserStore(userService)

const todoFixtureService = new TodoFixtureService()
const todoStoreWithApi = new TodoStoreWithApi(todoFixtureService)

const productApiService=new ProductApi();
const productStore=new ProductStore(productApiService);

const cartStore=new CartStore(productStore);

const authApiService=new AuthApi();
const authStore=new AuthStore(authApiService);


console.log(productStore)

export default {
    counterStore,
    userStore,
    todoStoreWithApi,
    productStore,
    cartStore,
    authStore
};
