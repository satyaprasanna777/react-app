import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

//@observer
class Todo {
    @observable id;
    @observable title;
    @observable isCompleted;


    constructor(value) {
        //super(value);
        this.id = Math.floor(Math.random() * 1000);
        this.title = value;
        this.isCompleted = false;
    }
    @action.bound
    onCompleteTodo() {

    }
    @action.bound
    onUpdateTodoTitle() {

    }
}
export default Todo;
