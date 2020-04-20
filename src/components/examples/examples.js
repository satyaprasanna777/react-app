/*global fetch*/
import React from 'react';
import { observable } from 'mobx';
//import styled from '@emotion/styled';
//import tw from 'tailwind.macro';

class Examples extends React.Component {

    componentDidMount() {
        fetch(
                'https://todo-list-2.getsandbox.com/todos', {
                    method: 'get',
                    dataType: 'json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        //'Authorization':'Bearer '+this.props.token
                    }
                })
            .then((response) => {
                return response.json();
            })
            .then((responseValue) => {
                console.log(responseValue);
            })
    }

    render() {
        return (
            <div>
                hai i am here
            </div>)
    }
}

export { Examples }
