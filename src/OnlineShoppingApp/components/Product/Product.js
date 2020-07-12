import React from 'react'
import {
   EachProduct,
   AddToCart,
   ProductImage,
   Title,
   Price,
   CurrencyFormat,
   Installements,
   YellowBar,
   FreeShipping
} from './styleComponents'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
//import CartStore from "../../stores/CartStore/CartStore";

@inject('cartStore')
@observer
class Product extends React.Component {
   @observable isHovered = false
   onClickAddToCart = () => {
      let { cartStore, productItem } = this.props
      cartStore.onClickAddToCart(productItem)
   }

   toggleHover = () => {
      this.isHovered = !this.isHovered
   }

   render() {
      let { productItem } = this.props
      return (
         <EachProduct
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            isHovered={this.isHovered}
         >
            {productItem.isFreeShipping ? (
               <FreeShipping>Free shipping</FreeShipping>
            ) : null}
            <ProductImage
               src={productItem.imageURL}
               alt='LoadingImage'
            ></ProductImage>
            <Title>{productItem.title}</Title>
            <YellowBar></YellowBar>
            <Price>
               <CurrencyFormat>{productItem.currencyFormat}</CurrencyFormat>
               {productItem.price}
            </Price>
            <Installements>
               or {productItem.installmentsCount} x {productItem.currencyFormat}
               {Math.round(productItem.price / productItem.installmentsCount)}
            </Installements>
            {this.isHovered && (
               <AddToCart onClick={this.onClickAddToCart}>
                  Add to cart
               </AddToCart>
            )}
         </EachProduct>
      )
   }
}

export default Product
