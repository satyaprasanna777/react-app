import React from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Footer, Button,FooterButtons } from './styleComponents';

//import todoStore from '../../../stores/TodoStore/todoStore';

@inject('todoStoreWithApi')
@observer
class TodoFooter extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    @action.bound
    onChangeSelectedFilter(event) {
        this.props.todoStoreWithApi.onChangeSelectedFilter(event.target.value)
    }

    render() {
        return (
            <Footer>
                <p>Items left:{this.props.numOfTodos}</p>
                <FooterButtons>
                    <Button onClick={this.onChangeSelectedFilter} value="All">All</Button>
                    <Button onClick={this.onChangeSelectedFilter} value="Active">Active</Button>
                    <Button onClick={this.onChangeSelectedFilter} value="Completed">Completed</Button>
                </FooterButtons>
                <Button onClick={this.props.todoStoreWithApi.onClearCompleted}>Clear Completed</Button>
            </Footer>)
    }
}

export const TodoFooterButton = (props) =>{
    return <Button disabled={props.disabled} onClick={props.onClick}>{props.buttonText}</Button>
}

export default TodoFooter;
