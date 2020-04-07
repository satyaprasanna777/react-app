/*global ReactDOM*/
import React from 'react';
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="list-of-todos">
            <input onChange={()=>this.props.checkTodo(this.props.eachObj)} className="check-box" type="checkbox" checked={this.props.eachObj.todoCheckStatus}/>
            {this.props.checkStatus(this.props.eachObj)}
            <button onClick={()=>this.props.removeTodo(this.props.eachObj)} className="cancel">X</button>
          </div>;
    }
}
class TodoAppBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    clearCompleted = () => {
        if (this.props.numOfCompletedTodos > 0)
            return <button onClick={this.props.clearCompleted} className="delete-completed-todos">Clear completed</button>;
    }
    render() {
        return <div className="todos-app-bottom">
                    <p className="itemsLeft">items left:{this.props.numOfTodos}</p>
                        <div>
                            <button onClick={this.props.allTodos} className="all-todos">All</button>
                            <button onClick={this.props.active} className="present-todos">Active</button>
                            <button onClick={this.props.completed} className="completed-todos">Completed</button>
                        </div>
                        {this.clearCompleted()}
                </div>;
    }
}
class TodosList extends React.Component {
    constructor(props) {
        super(props);
        this.todoId = 0;
        this.state = {
            listOfTodos: [],
            numOfItems: 0,
            todoFooterState: "all",
            numOfCompletedTodos: 0
        };
    }
    addTodoToTodosList = (event) => {
        if (event.key === "Enter" && event.target.value != "") {
            this.state.numOfItems++;
            let updatedListOfTodos = this.state.listOfTodos.slice(0);
            updatedListOfTodos.push({ numOfTodos: this.todoId++, todo: event.target.value, todoCheckStatus: false, todoOnfocus: false });
            event.target.value = "";
            this.setState({ listOfTodos: updatedListOfTodos });
        }
    }
    todoCheckedOrNot = (eachObj) => {
        console.log("eachObj.todoOnfocus", eachObj.todoOnfocus);
        const styles = { border: "2px solid grey" };
        if (eachObj.todoCheckStatus)
            return <input className="entered-todo-checked" type="text" defaultValue={eachObj.todo} disabled/>;
        else
            return <input style={eachObj.todoOnfocus?styles:null} className="entered-todo-unchecked" onFocus={()=>this.onfocus(eachObj)} onBlur={()=>this.onfocus(eachObj)} type="text" defaultValue={eachObj.todo}/>;
    }
    checkTodo = (eachObj) => {
        let dupList = this.state.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        if (eachObj.todoCheckStatus) {
            this.state.numOfItems++;
            this.state.numOfCompletedTodos--;
            dupList[index]["todoCheckStatus"] = false;
        }
        else {
            this.state.numOfItems--;
            this.state.numOfCompletedTodos++;
            dupList[index]["todoCheckStatus"] = true;
        }
        this.setState({ listOfTodos: dupList });
    }
    removeTodo = (eachObj) => {
        let dupList = this.state.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        if (dupList[index].todoCheckStatus === false)
            this.state.numOfItems--;
        else
            this.state.numOfCompletedTodos--;
        dupList.splice(index, 1);
        //let newDupList = dupList.filter(eachEl => eachEl.numOfTodos != eachObj.numOfTodos)
        this.setState({ listOfTodos: dupList });
    }
    onfocus = (eachObj) => {
        let dupList = this.state.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        dupList[index].todoOnfocus = !dupList[index].todoOnfocus
        this.setState({ listOfTodos: dupList })
    }
    allTodos = () => {
        this.setState({ todoFooterState: "all" });
    }
    active = () => {
        this.setState({ todoFooterState: "active" });
    }
    completed = () => {
        this.setState({ todoFooterState: "completed" });
    }
    clearCompleted = () => {
        let dupList = this.state.listOfTodos.slice(0);
        let newDupList = dupList.filter(eachEl => eachEl.todoCheckStatus === false);
        this.setState({ listOfTodos: newDupList });
    }

    todosAppBottom = () => {
        if (this.state.listOfTodos.length > 0)
            return <TodoAppBottom numOfTodos={this.state.numOfItems} allTodos={this.allTodos} active={this.active} completed={this.completed} clearCompleted={this.clearCompleted} numOfCompletedTodos={this.state.numOfCompletedTodos}/>;
    }
    renderTodosList = () => {
        let dupList = this.state.listOfTodos.slice(0);
        let newbtn = this.state.todoFooterState;
        let newDupList;
        switch (newbtn) {
            case "all":
                newDupList = dupList.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
            case "active":
                let dupList1 = dupList.filter((eachEl => eachEl.todoCheckStatus === false));
                newDupList = dupList1.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
            case "completed":
                let dupList2 = dupList.filter((eachEl => eachEl.todoCheckStatus === true));
                newDupList = dupList2.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
        }
        return newDupList;
    }
    render() {
        return <div>
        <p className="todos-styles">todos</p>
        <input className="user-input-todo" onKeyPress={this.addTodoToTodosList} type="text" placeholder="What needs to be done?"/>   
        {this.renderTodosList()}
        {this.todosAppBottom()}
        </div>;
    }
}
//ReactDOM.render(<TodosList/>, document.getElementById('root'));
export { TodosList };
