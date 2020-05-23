import React from 'react';
import {Product} from "../Product";
import { observer } from "mobx-react";
import { ProductListItems,ProductsFound,ProductsContainer,NumOfProductsAndSorting } from "./styleComponents";
import { ProductSort } from "../ProductSort";
import { Pagination } from "../Pagination";

@observer
class ProductList extends React.Component{
    render(){
        let {productStore}=this.props;
        return(
            <ProductsContainer>
                <NumOfProductsAndSorting>
                    <ProductsFound>{productStore.totalNoOfProductsDisplayed} Product(s) found</ProductsFound> 
                    <ProductSort onChangeSortBy={productStore.onChangeSortBy}/>
                </NumOfProductsAndSorting>
                <ProductListItems>
                    {this.props.sortedAndFilteredProducts.map((eachProduct)=><Product key={eachProduct.productId} productItem={eachProduct}/>)}
                </ProductListItems>
                <Pagination/>
            </ProductsContainer>
        )
    }
}

export default ProductList;