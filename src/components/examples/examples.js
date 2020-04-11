import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { Provider, inject, observer } from 'mobx-react';
import { observable } from 'mobx';

@inject("temp", "name")
class C extends React.Component {
    render() {
        const { temp, name } = this.props;
        console.log("in c", temp, name)
        return <div>{name}</div>
    }
}


@inject("temp")
@observer
class B extends React.Component {
    @observable name;
    onChange = (event) => {
        this.name = event.target.value;
    }
    render() {
        const { temp } = this.props;
        console.log("in b", temp)
        return (
            <div>
              <input style={{backgroundColor:"green",margin:"100px"}}type="text" value={this.name} onChange={this.onChange} placeholder="enter"/>
              <C name={this.name}/>
            </div>
        )
    }
}


class Examples extends React.Component {
    render() {
        return (
            <Provider temp={'value'} name={'satya'}>
            <B temp={'dupl'}/>
        </Provider>)
    }
}

export { Examples }
