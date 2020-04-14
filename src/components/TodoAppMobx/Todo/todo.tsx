import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import todoStore from '../../../stores/TodoStore/todoStore';

type TodoProps={
    eachTodo:eachTodo; 
}

@observer
class Todo extends React.Component<TodoProps> {
    constructor(props) {
        super(props);
    }
    @action.bound
    onCompleteTodo() {
        this.props.eachTodo.isCompleted=!this.props.eachTodo.isCompleted;
    }
    @action.bound
    onRemoveTodo() {
        todoStore.onRemoveTodo(this.props.eachTodo)
    }
    @action.bound
    onUpdateTodoTitle(event) {
        this.props.eachTodo.title = event.target.value;
    }
    render() {
        let { title, isCompleted } = this.props.eachTodo;
        return (
            <div>
                <input type="checkBox" onClick={this.onCompleteTodo} />
                <input type="text" onChange={this.onUpdateTodoTitle} defaultValue={title} disabled={isCompleted}/>
                <span onClick={this.onRemoveTodo}>X</span>
            </div>)
    }
}
export default Todo;
