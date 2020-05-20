import React from 'react';
import { DispalyMouseCoordinates } from "../DisplayMouseCoordinates/DisplayMouseCoordinates";

class MouseCoordinates extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }   

    handleMouseMove=(event)=>{
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            this.props.render(this.state,this.handleMouseMove)
            // <DispalyMouseCoordinates handleMouseMove={this.handleMouseMove} x={this.state.x} y={this.state.y}/>
            );
        }
    }

export {MouseCoordinates}