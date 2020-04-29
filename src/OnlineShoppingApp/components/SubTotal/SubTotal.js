import React from 'react';

class SubTotal extends React.Component{
    render(){
        let {total}=this.props;
        return(
        <div>SUBTOTAL:{total}</div>
        )
    }
}

export default SubTotal;