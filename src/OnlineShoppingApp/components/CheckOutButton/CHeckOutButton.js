import React from 'react';

class CheckOutButton extends React.Component{
    render(){
        let {clearCart}=this.props;
        return(
            <button onClick={clearCart}>CHECKOUT</button>
        )
    }
}

export default CheckOutButton;