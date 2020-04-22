import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react'
import { AddingTodo, TodosHeading,TodoInput } from './styleComponents'

//import todoStore from '../../../stores/TodoStore/todoStore';

@inject('todoStoreWithApi')
@observer
class AddTodo extends React.Component {
    @observable todoTitle;
    constructor(props) {
        super(props);
        this.todoTitle = ""
    }
    @action.bound
    onAddTodo(event) {
        if (event.key === "Enter") {
            let todoObj = {
                title: event.target.value,
                isCompleted: false
            }
            this.props.todoStoreWithApi.onAddTodo(todoObj);
            this.todoTitle = "";
        }
    }
    @action.bound
    onChangeInput(event) {
        this.todoTitle = event.target.value;
    }
    render() {
        return (
            <AddingTodo>
                <TodosHeading>todos</TodosHeading>
                <TodoInput onChange={this.onChangeInput} onKeyPress={this.onAddTodo} type="text" value={this.todoTitle} placeholder="What needs to be done?"/>
            </AddingTodo>
        );
    }
}
export default AddTodo;
