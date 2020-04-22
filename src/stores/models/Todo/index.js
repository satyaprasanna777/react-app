import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

//@observer
class Todo {
    @observable id;
    @observable title;
    @observable isCompleted;


    constructor(todoObj) {
        //super(value);
        this.id = Math.floor(Math.random() * 10000);
        this.title = todoObj.title;
        this.isCompleted = todoObj.isCompleted;
    }
    @action.bound
    onCompleteTodo() {

    }
    @action.bound
    onUpdateTodoTitle() {

    }
}
export default Todo;
