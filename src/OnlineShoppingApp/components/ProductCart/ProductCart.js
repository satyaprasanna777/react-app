import React from 'react';
import { observer } from "mobx-react";
import { CartList } from "../CartList";
import { SubTotal } from "../SubTotal";
import { CheckOutButton } from "../CheckOutButton";
import { CartArea,AddProductsMessage,SubTotalAndCLearCheckOut } from "./styleComponents";

@observer
class ProductCart extends React.Component{
    render(){
        console.log(2)
        let {cartProductList,cartProductObjects, getProductDetailsById,onRemoveCartItem,total,clearCart}=this.props;
        return(
            <CartArea>
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
            </CartArea>
        )
    }
}

export default ProductCart;