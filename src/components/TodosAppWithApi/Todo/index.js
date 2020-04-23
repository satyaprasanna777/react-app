import React from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { EachTodo, RemoveTodoButton, TodoCheckBox, EnteredTodo } from './styleComponents';

@inject('todoStoreWithApi')
@observer
class Todo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    @action.bound
    onCompleteTodo() {
        this.props.eachTodo.isCompleted = !this.props.eachTodo.isCompleted;
    }

    @action.bound
    onRemoveTodo() {
        this.props.todoStoreWithApi.onRemoveTodo(this.props.eachTodo);
    }

    @action.bound
    onUpdateTodoTitle(event) {
        this.props.eachTodo.title = event.target.value;
    }

    render() {
        let { title, isCompleted } = this.props.eachTodo;
        return (
            <EachTodo>
                <div>
                    <TodoCheckBox type="checkBox" onChange={this.onCompleteTodo} checked={isCompleted}/>
                    <EnteredTodo type="text" onChange={this.onUpdateTodoTitle} defaultValue={title} disabled={isCompleted}/>
                </div>
                <RemoveTodoButton onClick={this.onRemoveTodo}>X</RemoveTodoButton>
            </EachTodo>)
    }
}
export default Todo;
