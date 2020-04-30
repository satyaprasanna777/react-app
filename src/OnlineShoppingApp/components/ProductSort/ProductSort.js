import React from 'react';
import {observer} from 'mobx-react';
import { SortBySizeDropDown } from "./styleComponents";

@observer
class ProductSort extends React.Component{

    onChangeSortBy=(event)=>{
        let {onChangeSortBy}=this.props;
        onChangeSortBy(event.target.value);
    }
render(){
    return(
        <div>
            <span>Sort price by:</span>
            <SortBySizeDropDown onChange={this.onChangeSortBy}>
                <option>Select</option>
                <option value='ASCENDING'>Lowest To Highest</option>
                <option value='DESCENDING'>Highest to lowest</option>
            </SortBySizeDropDown>
        </div>
    )
}
}

export default ProductSort;