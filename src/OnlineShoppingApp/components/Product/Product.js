import React from 'react';
import {EachProduct,AddToCart} from './styleComponents';
import { inject } from "mobx-react";
//import CartStore from "../../stores/CartStore/CartStore";

@inject('cartStore')
class Product extends React.Component{

    onClickAddToCart=()=>{
        let {cartStore,productItem}=this.props;
        cartStore.onClickAddToCart(productItem);
    }

    render(){
        let {productItem}=this.props;
        return(
            <EachProduct>
                <img src={productItem.imageURL} alt="LoadingImage"></img>
                <p>{productItem.title}</p>
                <p><span>{productItem.currencyFormat}</span>{productItem.price}</p>
                <p>or <span>{productItem.installmentsCount}x{productItem.currencyFormat}{Math.round(productItem.price/productItem.installmentsCount)}</span></p>
                <AddToCart onClick={this.onClickAddToCart}>Add to cart</AddToCart>
            </EachProduct>
        )
    }
}

export default Product;