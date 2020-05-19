import React from 'react';
import { withScreenSizeDetectors } from "../MyfunctionalComponent/MyFunctionalComponent";

class DeviceTypeText extends React.Component{
    render(){
        const {deviceType}=this.props;
        return(
            <div>
                <b>Devise Type Text</b>
                <p>Device Type:{deviceType}</p>
            </div>
        )
    }
}

const WithScreenSizeDetectorsDeviceText=withScreenSizeDetectors(DeviceTypeText);

export {WithScreenSizeDetectorsDeviceText}