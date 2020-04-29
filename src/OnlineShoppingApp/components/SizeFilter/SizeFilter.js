import React from 'react';
import {observer} from 'mobx-react';
import { SizeButtons,SizeButton } from "./styleComponents";

@observer
class SizeFilter extends React.Component{

    onSelectSize=(event)=>{
        let {onSelectSize}=this.props;
        onSelectSize(event.target.value)
    }

    render(){
        return(
            <div>
                <p>Sizes:</p>
                <SizeButtons onClick={this.onSelectSize}>
                    <SizeButton value='XS'>XS</SizeButton>
                    <SizeButton value='S'>S</SizeButton>
                    <SizeButton value='M'>M</SizeButton>
                    <SizeButton value='L'>L</SizeButton>
                    <SizeButton value='XL'>XL</SizeButton>
                    <SizeButton value='XXL'>XXL</SizeButton>
                </SizeButtons>
            </div>
        )
    }
}

export default SizeFilter;