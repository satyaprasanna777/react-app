import React from 'react';
import {withToggleFunction} from "../MyfunctionalComponent/MyFunctionalComponent";

class CollapseExpand extends React.Component{
    render(){
        const {toggleStatus,onToggle}=this.props;
        return(
            <div>
                <b>CollapseExpand</b>
                <p>Sample shopping list:</p>
                <button onClick={onToggle}>{toggleStatus?"Collapse":"Expand"}</button>
                {toggleStatus?<div>Eggs<br/>Bread</div>:null}
            </div>
        )
    }
}

const ExpandCollapseWithToggle=withToggleFunction(CollapseExpand);

export {ExpandCollapseWithToggle}
