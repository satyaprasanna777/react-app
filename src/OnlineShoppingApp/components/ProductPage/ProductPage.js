import {observer, inject} from 'mobx-react';
import React from 'react';
import {Header} from "../Header";
import { ProductList } from "../ProductList";

@inject('productStore')
@observer
class ProductPage extends React.Component{
    componentDidMount(){
    this.props.productStore.getProductList();
    }

    render(){
        return (
        <div>
            <Header/>
            <ProductList sortedAndFilteredProducts={this.props.productStore.sortedAndFilteredProducts}/>
        </div>);
    }
}

export default ProductPage;