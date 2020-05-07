import React from 'react';
import { observer } from "mobx-react";
import { CartList } from "../CartList";
import { SubTotal } from "../SubTotal";
import { CheckOutButton } from "../CheckOutButton";
import { CartArea,AddProductsMessage,SubTotalAndCLearCheckOut,CartContainer,CloseCart,DisplayCart,Cart } from "./styleComponents";
//import { FiShoppingCart } from "react-icons/fi";
import {observable} from "mobx"
@observer
class ProductCart extends React.Component{
   @observable  shouldDisplayCart =false
   showCart=()=>{
   this.shouldDisplayCart=true
   }
   hideCart=()=>{
    this.shouldDisplayCart=false
   }
    render(){
        let {cartProductList,cartProductObjects, getProductDetailsById,onRemoveCartItem,total,clearCart}=this.props;
        return(
            <div>
            <Cart onClick={this.showCart}>button</Cart>
            <CartArea>
                {this.shouldDisplayCart?
                <CartContainer shouldDisplayCart={this.shouldDisplayCart}>
                    <CloseCart onClick={this.hideCart}>X</CloseCart>
                    <DisplayCart>
                            <p>no.of items:{cartProductObjects.length}</p>
                        {cartProductList.length!==0?
                        <CartList cartProductList={cartProductList} 
                        getProductDetailsById={getProductDetailsById}
                        onRemoveCartItem={onRemoveCartItem}/>:
                        <AddProductsMessage>Add some products in cart</AddProductsMessage>}
                        <SubTotalAndCLearCheckOut>
                            <SubTotal total={total}/>
                            <CheckOutButton clearCart={clearCart}/>
                        </SubTotalAndCLearCheckOut>
                    
                    </DisplayCart>
                </CartContainer>:""}

            </CartArea>
        </div>)
    }
}

export default ProductCart;