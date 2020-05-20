import React from 'react';
import { withScreenSizeDetectors } from "../MyfunctionalComponent/MyFunctionalComponent";
import { DeviceTypeContainer } from "./styleComponents";

class DeviceTypeText extends React.Component{
    render(){
        const {deviceType}=this.props;
        return(
            <DeviceTypeContainer>
                <b>Devise Type Text</b>
                <p>Device Type:{deviceType()}</p>
            </DeviceTypeContainer>
        )
    }
}

const WithScreenSizeDetectorsDeviceText=withScreenSizeDetectors(DeviceTypeText);

export {WithScreenSizeDetectorsDeviceText}