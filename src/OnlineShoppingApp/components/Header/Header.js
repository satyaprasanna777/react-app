import React from 'react';
import { inject,observer } from "mobx-react";
import {ProductSort} from '../ProductSort'
import { SizeFilter } from "../SizeFilter";
import { HeaderPart,CartAndSignout,FiltersAndProducts,ProductsFound } from "./styleComponents";
import { ProductCart } from "../ProductCart";

@inject('productStore','cartStore')
@observer
class Header extends React.Component{

    // showOrHideCart=()=>{
    //     console.log(1)
    //     return <ProductCart/>
    // }

    render(){
        let {productStore,cartStore}=this.props;
        return(
            <HeaderPart>
                <CartAndSignout>
                    <button>Sign Out</button>
                    <ProductCart cartProductList={cartStore.cartProductList} 
                    getProductDetailsById={cartStore.getProductDetailsById}
                    onRemoveCartItem={cartStore.onRemoveCartItem}
                    total={cartStore.total}
                    clearCart={cartStore.clearCart}
                    cartProductObjects={cartStore.cartProductObjects}/>
                    {/* <button onClick={this.showOrHideCart}>CartImage</button> */}
                </CartAndSignout>
                <FiltersAndProducts>
                    <SizeFilter onSelectSize={productStore.onSelectSize}/>
                    <ProductsFound>{productStore.totalNoOfProductsDisplayed} Product(s) found</ProductsFound> 
                    <ProductSort onChangeSortBy={productStore.onChangeSortBy}/>
                </FiltersAndProducts>
            </HeaderPart>
        )
    }
}

export default Header;