import React from 'react';
import {CartItem} from '../CartItem';
import { observer } from "mobx-react";

@observer
class CartList extends React.Component{
    render(){
        // alert("cart list")
        let {cartProductList,getProductDetailsById,onRemoveCartItem}=this.props;
        return(
            cartProductList.map(eachItem=> 
            <CartItem key={eachItem.cartItemId} 
            cartItem={eachItem} 
            getProductDetailsById={getProductDetailsById}
            onRemoveCartItem={onRemoveCartItem}/>
            )
        )
    }  
}

export default CartList;