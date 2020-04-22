import React from 'react';
import { observer, inject } from 'mobx-react';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';
import AddTodo from './AddTodo';
import Todo from './Todo';
import TodoFooter from './TodoFooter'
import { TodosApp } from './styleComponents'

@inject('todoStoreWithApi')
@observer
class TodosAppWithApi extends React.Component {
    componentDidMount() {
        this.doNetworkCalls()
    }

    doNetworkCalls = () => {
        this.props.todoStoreWithApi.getTodos()
    }

    renderTodosList = () => {
        const { todos } = this.props.todoStoreWithApi;
        if (todos.length === 0)
            return <NoDataView/>
        return todos.map(eachTodo => <Todo key={eachTodo.id} eachTodo={eachTodo}/>)
    }

    render() {
        const { getTodosApiStatus, getTodosApiError, todos } = this.props.todoStoreWithApi;
        return (
            <TodosApp>
                <AddTodo/>
                {todos.length===0?<LoadingWrapperWithFailure
                apiStatus={getTodosApiStatus}
                apiError={getTodosApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderTodosList}
                />:
                this.renderTodosList()}
                {todos.length!==0?<TodoFooter 
                numOfTodos={this.props.todoStoreWithApi.activeTodosCount}/>:null}
            </TodosApp>)
    }
}

export default TodosAppWithApi;
