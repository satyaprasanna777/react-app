import React from 'react';
import {observer} from 'mobx-react';
import { SizeButtons,SizeButton,Sizes } from "./styleComponents";

@observer
class SizeFilter extends React.Component{

    onSelectSize=(event)=>{
        let {onSelectSize}=this.props;
        onSelectSize(event.target.value)
    }

    isClicked=(size)=>{
        let {sizeFilter}=this.props;
        let selectedSize=sizeFilter.find(eachSize=>eachSize.size===size)
        return selectedSize.isClicked;
    }

    render(){
        return(
            <div>
                <Sizes>Sizes:</Sizes>
                <SizeButtons onClick={this.onSelectSize}>
                    <SizeButton isClicked={this.isClicked('XS')} value='XS'>XS</SizeButton>
                    <SizeButton isClicked={this.isClicked('S')} value='S'>S</SizeButton>
                    <SizeButton isClicked={this.isClicked('M')} value='M'>M</SizeButton>
                    <SizeButton isClicked={this.isClicked('L')} value='L'>L</SizeButton>
                    <SizeButton isClicked={this.isClicked('XL')} value='XL'>XL</SizeButton>
                    <SizeButton isClicked={this.isClicked('XXL')} value='XXL'>XXL</SizeButton>
                </SizeButtons>
            </div>
        )
    }
}

export default SizeFilter;