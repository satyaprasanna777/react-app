/*global fetch*/
import { observable, action, computed } from 'mobx';

import Todo from '../models/Todo';

class TodoStore {
    @observable todos;
    @observable allTodos;
    @observable selectedFilter;
    @observable responseStatus;

    constructor() {
        this.todos = [];
        this.allTodos = [];
        this.selectedFilter = "ALL";
        this.getInitialTodos();
    }

    @action.bound
    onAddTodo(value) {
        const newTodo = new Todo(value);
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

    @action.bound
    getInitialTodos() {
        fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'get',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => {
                this.responseStatus = response.status;
                return response.json();
            })
            .then((responseValue) => {
                if (this.responseStatus === 200)
                    responseValue.map(eachTodo => {
                        const newTodo = new Todo(eachTodo.name);
                        this.todos.push(newTodo);
                        this.allTodos.push(newTodo);
                    })
            })
    }

    @action.bound
    onClickRetry() {
        console.log("retry")
        this.getInitialTodos();
    }

    @computed
    get activeTodosCount() {
        let activeTodos = this.allTodos.filter(eachTodo => eachTodo.isCompleted === false)
        return activeTodos.length;
    }

    @computed
    get filteredTodos() {

    }
}
const todoStore = new TodoStore();
export default todoStore;
