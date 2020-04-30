import {observer, inject} from 'mobx-react';
import React from 'react';
import {Header} from "../Header";
import { ProductList } from "../ProductList";
import { ProductCart } from "../ProductCart";
import { ProductPageContainer } from "./styleComponents";

@inject('productStore','cartStore')
@observer
class ProductPage extends React.Component{
    componentDidMount(){
    this.props.productStore.getProductList();
    }

    render(){
        let {productStore,cartStore}=this.props;
        return (
        <ProductPageContainer>
            <Header/>
            <ProductList sortedAndFilteredProducts={productStore.sortedAndFilteredProducts} productStore={productStore}/>
            <ProductCart cartProductList={cartStore.cartProductList} 
                    getProductDetailsById={cartStore.getProductDetailsById}
                    onRemoveCartItem={cartStore.onRemoveCartItem}
                    total={cartStore.total}
                    clearCart={cartStore.clearCart}
                    cartProductObjects={cartStore.cartProductObjects}/>
        </ProductPageContainer>);
    }
}

export default ProductPage;