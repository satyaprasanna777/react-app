import { observable, action, computed, toJS } from "mobx";
import CartItem from "../models/CartItem/CartItem";

class CartStore{
    @observable cartProductList;
    @observable productStore;
    @observable cartProductObjects;

    constructor(productStore){
        this.cartProductList=[];
        this.cartProductObjects=[];
        this.productStore=productStore;
    }

    @action.bound 
    onClickAddToCart(cartObj){
        let newCartItem=new CartItem(cartObj);
        let itemRepeat= this.cartProductList.find(eachItem=>eachItem.productId===cartObj.productId)
        if(!itemRepeat){
            this.cartProductList.push(newCartItem);
            newCartItem.incrementQuantity();
        }
        else
            itemRepeat.incrementQuantity();

            console.log("cartProductList:",toJS(this.cartProductList));

    }

    @action.bound
    onRemoveCartItem(productId){   
        let removeItem=this.cartProductList.find(eachItem=>eachItem.productId===productId);
        this.cartProductList.splice(removeItem,1);
        this.cartProductObjects=this.cartProductObjects.filter(eachItem=>eachItem.productId!==productId);
    }

    @action.bound    
    clearCart(){
        this.cartProductList=[];
        this.cartProductObjects=[];
    }

    @action.bound
    getProductDetailsById(productId){
        let cartProduct=this.productStore.productList.find(eachProduct=>eachProduct.productId===productId);
        this.cartProductObjects.push(cartProduct);
        console.log("cartProductObjects:",toJS(this.cartProductObjects));

        return cartProduct;
        }

    @computed
    get total(){
        return this.cartProductObjects.reduce((prev,next) => prev + next.price,0);
    }
}

export default CartStore;