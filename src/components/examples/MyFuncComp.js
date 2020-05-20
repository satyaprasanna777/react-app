import React from 'react';

export default function withSubscription(WrappedComponent,data){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={data:''}
        }

        onClickButton=()=>{
            this.setState({data:data})
        }

        render(){
            return <WrappedComponent onClickButton={this.onClickButton} data={this.state.data} />;
        }
    }
}