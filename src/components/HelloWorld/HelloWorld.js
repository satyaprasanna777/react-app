import React, {Component} from 'react';

export class HelloWorld extends Component{
    render(){
        return(
            <p>Hello ${this.props.message}</p>
        )
    }
}

// export {HelloWorld}
