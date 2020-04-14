import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react'

import todoStore from '../../../stores/TodoStore/todoStore';
import { Todos, TodoInput, Heading } from '../todoAppStyles'


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
            todoStore.onAddTodo(event.target.value);
            this.todoTitle = "";
        }
    }
    @action.bound
    onChangeInput(event) {
        this.todoTitle = event.target.value;
    }
    render() {
        return (
            <div>
                <Todos>
                    <Heading>todos</Heading>
                    <TodoInput onChange={this.onChangeInput} onKeyPress={this.onAddTodo} type="text" value={this.todoTitle} placeholder="What needs to be done?"/>
                </Todos>
                
            </div>
        );
    }
}
export default AddTodo;
