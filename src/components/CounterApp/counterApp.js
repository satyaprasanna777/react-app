import React from 'react';
import { observer, inject } from 'mobx-react';

import stores from '../../stores';
import { Counterapp, Button, ButtonsAndInput, Input } from './counterAppStyles.js'
const counterStore = stores.counterStore;

@observer
class CounterApp extends React.Component {
    handleIncrement = () => {
        counterStore.incrementCounter();
    }

    handleDecrement = () => {
        counterStore.decrementCounter();
    }
    onChangeCount = (event) => {
        counterStore.changeCount(event.target.value);
    }
    render() {
        return (
            <Counterapp>
            <b>Counter</b><br/>
            <ButtonsAndInput>
                <Button onClick={this.handleIncrement}>+</Button>
                <Input onChange={this.onChangeCount} type="number" value={counterStore.count}/>
                <Button onClick={this.handleDecrement}>-</Button>
            </ButtonsAndInput>
      </Counterapp>
        );
    }
}

export default CounterApp;
