import React, {Component} from 'react';
import Button from "../button/button";

export class HelloWorld extends Component{
    render(){
        return(
            <div>
                <p>Hello ${this.props.message}</p>
                <Button label="click me please"></Button>
            </div>
        )
    }
}

// export {HelloWorld}
