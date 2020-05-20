import React from 'react';
import {withToggleFunction} from "../MyfunctionalComponent/MyFunctionalComponent";
import { CollapseExpandContainer,ExpandCollapseButtonAndText,ToggleButton,ListItems } from "./styleComponents";

class CollapseExpand extends React.Component{
    render(){
        const {toggleStatus,onToggle}=this.props;
        return(
            <CollapseExpandContainer>
                <b>CollapseExpand</b>
                <ExpandCollapseButtonAndText>
                    <p>Sample shopping list:</p>
                    <ToggleButton onClick={onToggle}>{toggleStatus?"Collapse":"Expand"}</ToggleButton>
                </ExpandCollapseButtonAndText>
                {toggleStatus?<ListItems>Eggs<br/>Bread</ListItems>:null}
            </CollapseExpandContainer>
        )
    }
}

const ExpandCollapseWithToggle=withToggleFunction(CollapseExpand);

export {ExpandCollapseWithToggle}
