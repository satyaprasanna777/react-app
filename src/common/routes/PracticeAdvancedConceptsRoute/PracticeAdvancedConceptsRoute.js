import React from 'react';
import { EditWithToggle } from "../../components/ViewEditToggle/ViewEditToggle";
import { ExpandCollapseWithToggle } from "../../components/CollapseExpand/CollapseExpand";
import { WithScreenSizeDetectorsDeviceText } from "../../components/DeviceTypeText/DeviceTypeText";
import { MouseTracker } from "../../components/DisplayMouseCoordinates/DisplayMouseCoordinates";
// import { MouseCoordinates } from "../../components/MouseCoordinates/MouseCoordinates";

class PracticeAdvancedConceptsRoute extends React.Component{
    render(){
        return(
            <div>
                <EditWithToggle/>
                <ExpandCollapseWithToggle/>
                <WithScreenSizeDetectorsDeviceText/>
                <MouseTracker/>
            </div>
        )
    }
}

export {PracticeAdvancedConceptsRoute};





















