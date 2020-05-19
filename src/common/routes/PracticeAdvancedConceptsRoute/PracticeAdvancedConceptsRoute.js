import React from 'react';
import { EditWithToggle } from "../../components/ViewEditToggle/ViewEditToggle";
import { ExpandCollapseWithToggle } from "../../components/CollapseExpand/CollapseExpand";
import { WithScreenSizeDetectorsDeviceText } from "../../components/DeviceTypeText/DeviceTypeText";

class PracticeAdvancedConceptsRoute extends React.Component{
    render(){
        return(
            <div>
                <EditWithToggle/>
                <ExpandCollapseWithToggle/>
                <WithScreenSizeDetectorsDeviceText/>
            </div>
        )
    }
}

export {PracticeAdvancedConceptsRoute};