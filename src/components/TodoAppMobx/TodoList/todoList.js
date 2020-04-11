import React from 'react';
//import todoStore from '../../../stores/TodoStore/todoStore.js';
import Todo from '../Todo/todo.js';
import { observer } from 'mobx-react'

@observer
class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.todos.map(eachTodo => <Todo key={eachTodo.id} eachTodo={eachTodo}/>)
        );
    }
}
export default TodoList;
