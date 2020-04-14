import React from 'react';
import { observer } from 'mobx-react';

import todoStore from '../../stores/TodoStore/todoStore'
import AddTodo from './AddTodo/addTodo'
import TodoList from './TodoList/todoList';
import TodoFooter from './TodoFooter/todoFooter';


@observer
class TodoApp extends React.Component {
    render() {
        return (<div>
                <AddTodo/>
                <TodoList todos={todoStore.todos}/>
                <TodoFooter numOfTodos={todoStore.activeTodosCount}/>
            </div>)
    }
}
export default TodoApp;
