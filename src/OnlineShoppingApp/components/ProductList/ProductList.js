import React from 'react';
import {Product} from "../Product";
import { ProductListItems } from "./styleComponents";

class ProductList extends React.Component{
    render(){
        
        return(
            <ProductListItems>
                {this.props.sortedAndFilteredProducts.map((eachProduct)=><Product key={eachProduct.productId} productItem={eachProduct}/>)}
            </ProductListItems>
        )
    }
}

export default ProductList;