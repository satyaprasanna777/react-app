import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import todoStore from '../../../stores/TodoStore/todoStore';

@observer
class TodoFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    @action.bound
    onChangeSelectedFilter(event) {
        todoStore.onChangeSelectedFilter(event.target.value)
    }
    render() {
        return (
            <div>
                <p>Items left:{this.props.numOfTodos}</p>
                <button onClick={this.onChangeSelectedFilter} value="All">All</button>
                <button onClick={this.onChangeSelectedFilter} value="Active">Active</button>
                <button onClick={this.onChangeSelectedFilter} value="Completed">Completed</button>
                <button onClick={todoStore.onClearCompleted}>Clear Completed</button>
            </div>)
    }
}
export default TodoFooter;
