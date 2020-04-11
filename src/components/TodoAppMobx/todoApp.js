import React from 'react';
import AddTodo from './AddTodo/addTodo.js'
import todoStore from '../../stores/TodoStore/todoStore.js'
import TodoList from './TodoList/todoList.js';
import TodoFooter from './TodoFooter/todoFooter.js';
import { observer } from 'mobx-react';

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
