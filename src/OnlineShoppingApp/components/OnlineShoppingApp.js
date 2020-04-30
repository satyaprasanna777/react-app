import {observer} from 'mobx-react';
import React from 'react';
import { ProductPage } from "./ProductPage";

@observer
class OnlineShoppingApp extends React.Component{
    render(){
        return (
        <div>
            <ProductPage/>
        </div>);
    }
}

export default OnlineShoppingApp;