import React from 'react';

function withToggleFunction(WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                toggleStatus:false
            }
        }
    
        onToggle=()=>{
            this.setState({toggleStatus:!this.state.toggleStatus})
        }
    
        render(){
            return <WrappedComponent onToggle={this.onToggle} toggleStatus={this.state.toggleStatus} />;
        }
    }
}

function withScreenSizeDetectors(WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={viewPortWidth:window.innerWidth}
        }

        isMobile=()=>{
            this.setState({viewPortWidth:window.innerWidth});
            return 'Mobile';
        }

        isTablet=()=>{
            this.setState({viewPortWidth:window.innerWidth});
            return 'Tablet';
        }

        isDesktop=()=>{
            this.setState({viewPortWidth:window.innerWidth});
            return 'Desktop';
        }

        selectDeviceType=()=>{
            if(window.innerWidth<576)
            return this.isMobile();
            else if(window.innerWidth>=576 && window.innerWidth<992)
            return this.isTablet();
            else
            return this.isDesktop();
        }

        render(){
            console.log("width:",this.state.viewPortWidth)
            return <WrappedComponent deviceType={this.selectDeviceType}/>;
        }
    }
}


export {withToggleFunction,withScreenSizeDetectors}