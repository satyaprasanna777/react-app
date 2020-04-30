import React from 'react';
import { inject,observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { SizeFilter } from "../SizeFilter";
import { HeaderPart,SignOutButton} from "./styleComponents";

@inject('productStore')
@observer
class Header extends React.Component{

    // showOrHideCart=()=>{
    //     console.log(1)
    //     return <ProductCart/>
    // }

    onClickSignOut=()=>{   
        this.props.history.replace('/sign-in-page')
    }

    render(){
        let {productStore}=this.props;
        return(
            <HeaderPart>
                <SignOutButton onClick={this.onClickSignOut}>Sign Out</SignOutButton>
                {/* <button onClick={this.showOrHideCart}>CartImage</button> */}
                <SizeFilter onSelectSize={productStore.onSelectSize} sizeFilter={productStore.sizeFilter}/>
            </HeaderPart>
        )
    }
}

export default withRouter(Header);