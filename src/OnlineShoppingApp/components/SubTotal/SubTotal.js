import React from 'react';
import { SubTOtalContainer } from "./styleComponents";

class SubTotal extends React.Component{
    render(){
        let {total}=this.props;
        return(
        <SubTOtalContainer>
            <p>SUBTOTAL</p>
            <p>{total}</p>
        </SubTOtalContainer>
        )
    }
}

export default SubTotal;