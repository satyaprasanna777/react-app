import React from 'react';
import { observer } from "mobx-react";

@observer
class CartItem extends React.Component{

    getProductDetailsById=()=>{
        let {getProductDetailsById,cartItem}=this.props;
        return getProductDetailsById(cartItem.productId)
    }

    onRemoveCartItem=()=>{
        let {onRemoveCartItem,cartItem}=this.props;
        onRemoveCartItem(cartItem.productId);
    }

    render(){
        let {cartItem}=this.props;
        let cartProduct=this.getProductDetailsById()
        return(
            <div>
                <img src={cartProduct.imageURL} alt="imageLoading" width="100px"/>
                <p>{cartProduct.title}</p>
                <p>{cartProduct.printStyle}</p>
                <p><span>{cartProduct.currencyFormat}</span>{cartProduct.price}</p>
                <p>Quantity:{cartItem.quantity}</p>
                <button onClick={this.onRemoveCartItem}>X</button>
            </div>
        )
    }
}

export default CartItem