import React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import Todo from '../models/Todo';

let allTodos = [];
@observer
class TodoStore extends React.Component {
    @observable todos = [];
    @observable selectedFilter = "ALL"

    @action.bound
    onAddTodo(value) {
        const newTodo = new Todo(value);
        this.todos.push(newTodo);
        allTodos.push(newTodo);
    }

    @action.bound
    onRemoveTodo(todo) {
        let todoIndex = this.todos.indexOf(todo)
        this.todos.splice(todoIndex, 1);
        allTodos.splice(allTodos.indexOf(todo), 1);
    }
    @action.bound
    onChangeSelectedFilter(selectedFilter) {
        this.selectedFilter = selectedFilter;
        switch (this.selectedFilter) {
            case 'All':
                this.todos = allTodos.map(eachTodo => eachTodo);
                break;
            case 'Completed':
                this.todos = allTodos.filter(eachTodo => eachTodo.isCompleted === true);
                break;
            case 'Active':
                this.todos = allTodos.filter(eachTodo => eachTodo.isCompleted === false);
                break;
        }
    }
    @action.bound
    onClearCompleted() {
        let completedTodos = this.todos.filter(eachTodo => eachTodo.isCompleted === true)
        completedTodos.map(eachTodo => this.todos.splice(this.todos.indexOf(eachTodo), 1));
        completedTodos.map(eachTodo => allTodos.splice(allTodos.indexOf(eachTodo), 1));
    }
    @computed
    get activeTodosCount() {
        let activeTodos = this.todos.filter(eachTodo => eachTodo.isCompleted === false)
        return activeTodos.length;
    }
    @computed
    get filteredTodos() {

    }
}
const todoStore = new TodoStore();
export default todoStore;
