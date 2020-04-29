import { observable, action } from "mobx";

class CartItem{
    @observable cartItemId;
    @observable productId;
    @observable quantity;

    constructor(cartObj){
        this.cartItemId=Math.floor(Math.random()*10000);
        this.productId=cartObj.productId;
        this.quantity=0;
    }

    @action.bound
    incrementQuantity(){
        this.quantity+=1;
    }
}

export default CartItem;