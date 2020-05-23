import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <button onClick={this.props.onClick} {...this.props}>{this.props.children}</button>
        )
    }
}

export {Button};     