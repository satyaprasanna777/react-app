import React from 'react';
import {EachProduct,AddToCart,ProductImage,Title,Price,CurrencyFormat,Installements,YellowBar,FreeShipping} from './styleComponents';
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
                <div style={{display:"flex"}}>
                {productItem.isFreeShipping?<FreeShipping>Free shipping</FreeShipping>:null}
                <ProductImage src={productItem.imageURL} alt="LoadingImage"></ProductImage>
                </div>
                <Title>{productItem.title}</Title>
                <YellowBar></YellowBar>
                <Price><CurrencyFormat>{productItem.currencyFormat}</CurrencyFormat>{productItem.price}</Price>
                <Installements>or {productItem.installmentsCount} x {productItem.currencyFormat}{Math.round(productItem.price/productItem.installmentsCount)}</Installements>
                <AddToCart onClick={this.onClickAddToCart}>Add to cart</AddToCart>
            </EachProduct>
        )
    }
}

export default Product;