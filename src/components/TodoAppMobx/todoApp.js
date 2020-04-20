import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import todoStore from '../../stores/TodoStore/todoStore';
import AddTodo from './AddTodo/addTodo';
import TodoList from './TodoList/todoList';
import NoDataPage from './NoDataPage/noDataPage';
import TodoFooter from './TodoFooter/todoFooter';
import LoadingPage from './LoadingPage/loadingPage';
import RetryPage from './RetryPage/retryPage'

@observer
class TodoApp extends React.Component {

    @action.bound
    renderBody() {
        return (todoStore.responseStatus === 200 ? <TodoList todos={todoStore.todos}/> :
            (todoStore.responseStatus === 204 ? <NoDataPage/> :
                (todoStore.responseStatus >= 400 ? <RetryPage onClickRetry={todoStore.onClickRetry}/> :
                    <LoadingPage/>)))


    }

    render() {
        console.log(todoStore.responseStatus)
        return (<div>
                <AddTodo/>
                {this.renderBody()}
                <TodoFooter numOfTodos={todoStore.activeTodosCount}/>
            </div>)
    }
}
export default TodoApp;
