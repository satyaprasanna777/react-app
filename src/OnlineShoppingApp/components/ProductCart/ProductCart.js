import React from 'react';
import { CartArea } from "./styleComponents";
import { observer } from "mobx-react";
import { CartList } from "../CartList";
import { SubTotal } from "../SubTotal";
import { CheckOutButton } from "../CheckOutButton";

@observer
class ProductCart extends React.Component{
    render(){
        let {cartProductList,cartProductObjects, getProductDetailsById,onRemoveCartItem,total,clearCart}=this.props;
        return(
            <CartArea>
                <p>no.of items:{cartProductObjects.length}</p>
                {cartProductList.length!==0?
                <CartList cartProductList={cartProductList} 
                getProductDetailsById={getProductDetailsById}
                onRemoveCartItem={onRemoveCartItem}/>:
                <p>Add some products in cart</p>}
                <SubTotal total={total}/>
                <CheckOutButton clearCart={clearCart}/>
            </CartArea>
        )
    }
}

export default ProductCart;