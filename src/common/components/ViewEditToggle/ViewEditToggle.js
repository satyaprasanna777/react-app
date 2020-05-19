import React from 'react';
import {withToggleFunction} from "../MyfunctionalComponent/MyFunctionalComponent";

class ViewEditToggle extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={buttonValue:'Edit'}
    // }

    render(){
        const {toggleStatus,onToggle}=this.props;
        return(
            <div>
                <h1>HOC's Usage</h1>
                <b>View edit toggle</b>
                {toggleStatus?
                <input type="text" defaultValue="Click on edit button to start editing"/>:
                <p>Click on edit button to start editing</p>}

                <button onClick={onToggle}>{toggleStatus?"Cancel":"Edit"}</button>

                
            </div>
        )
    }
}
const EditWithToggle=withToggleFunction(ViewEditToggle);

export {EditWithToggle};