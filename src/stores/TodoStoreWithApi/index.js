import { observable, action, computed } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import Todo from '../models/Todo';

class TodoStoreWithApi {
    @observable getTodosApiStatus;
    @observable getTodosApiError;
    @observable todos;
    @observable allTodos;
    @observable selectedFilter;
    todoService;

    constructor(todoService) {
        this.todoService = todoService;
        this.init();
        this.todos = [];
        this.allTodos = [];
        this.selectedFilter = "ALL";
    }

    @action.bound
    onAddTodo(todoObj) {
        const newTodo = new Todo(todoObj);
        this.todos.push(newTodo);
        this.allTodos.push(newTodo);
    }

    @action.bound
    onRemoveTodo(todo) {
        let todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
        this.allTodos.splice(this.allTodos.indexOf(todo), 1);
    }

    @action.bound
    onChangeSelectedFilter(selectedFilter) {
        this.selectedFilter = selectedFilter;
        // eslint-disable-next-line default-case
        switch (this.selectedFilter) {
            case 'All':
                this.todos = this.allTodos.map(eachTodo => eachTodo);
                break;
            case 'Completed':
                this.todos = this.allTodos.filter(eachTodo => eachTodo.isCompleted === true);
                break;
            case 'Active':
                this.todos = this.allTodos.filter(eachTodo => eachTodo.isCompleted === false);
                break;
        }
    }

    @action.bound
    onClearCompleted() {
        let completedTodos = this.todos.filter(eachTodo => eachTodo.isCompleted === true)
        completedTodos.map(eachTodo => this.todos.splice(this.todos.indexOf(eachTodo), 1));
        completedTodos.map(eachTodo => this.allTodos.splice(this.allTodos.indexOf(eachTodo), 1));
    }

    @computed
    get activeTodosCount() {
        let activeTodos = this.todos.filter(eachTodo => eachTodo.isCompleted === false)
        return activeTodos.length;
    }

    @action
    init() {
        this.getTodosApiStatus = API_INITIAL;
        this.getTodosApiError = null;
        this.todos = [];
    }

    @action.bound
    setTodosApiResponse(todos) {
        todos.map((eachTodo) => this.onAddTodo(eachTodo));
        console.log(this.todos);
    }

    @action.bound
    setTodosApiError(error) {
        this.getUsersApiError = error;
        console.log(error);
    }

    @action.bound
    setTodosApiStatus(apiStatus) {
        this.getTodosApiStatus = apiStatus;
    }

    @action.bound
    getTodos() {
        const todosPromise = this.todoService.getTodosApi();
        return bindPromiseWithOnSuccess(todosPromise)
            .to(this.setTodosApiStatus, this.setTodosApiResponse)
            .catch(this.setTodosApiError)
    }
}

export default TodoStoreWithApi;
