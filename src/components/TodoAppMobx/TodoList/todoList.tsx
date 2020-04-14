import React from 'react';
import { observer } from 'mobx-react'
import Todo from '../Todo/todo';

type TodoListProps={
    todos:any;
}

@observer
class TodoList extends React.Component<TodoListProps> {
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
  