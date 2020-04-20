import React from 'react';
import { observer } from 'mobx-react'
import Todo from '../Todo/todo';

@observer
class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { todos } = this.props
        return (
            <div>
                {todos.map(eachTodo => <Todo key={eachTodo.id} eachTodo={eachTodo}/>)}
            </div>
        );
    }
}
export default TodoList;
