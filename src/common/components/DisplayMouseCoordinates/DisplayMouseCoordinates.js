import React from 'react'
import { MouseCoordinates } from "../MouseCoordinates/MouseCoordinates";
import {DisplayMouseCoordinatesContainer,RenderPropsHeading} from './styleComponents.js'
class DispalyMouseCoordinates extends React.Component{
    render(){
        const {handleMouseMove,state}=this.props;
        return(
            <div>
                <RenderPropsHeading>Render Props Usage</RenderPropsHeading>
                <DisplayMouseCoordinatesContainer>
                    <b>Display Mouse Coordinates</b>
                    <p onMouseMove={handleMouseMove}>The mouse position is({state.x},{state.y})</p>
                </DisplayMouseCoordinatesContainer>
            </div>
        )
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <MouseCoordinates render={(state,handleMouse) => (
                <DispalyMouseCoordinates state={state} handleMouseMove={handleMouse} />
                )}/>
            </div>
            );
        }
    }

export {MouseTracker}