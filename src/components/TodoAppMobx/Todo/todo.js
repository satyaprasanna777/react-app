import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import todoStore from '../../../stores/TodoStore/todoStore';

@observer
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    @action.bound
    onCompleteTodo() {
        this.props.eachTodo.isCompleted = !this.props.eachTodo.isCompleted;
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
                <input type="checkBox" onChange={this.onCompleteTodo} checked={isCompleted}/>
                <input type="text" onChange={this.onUpdateTodoTitle} defaultValue={title} disabled={isCompleted}/>
                <span onClick={this.onRemoveTodo}>X</span>
            </div>)
    }
}
export default Todo;
