import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import eventStore from '../../../stores/EventStore/eventStore';

@observer
class AddEvent extends React.Component {
    @observable eventName = "";
    @observable eventLocation = "";

    @action.bound
    onAddEvent(event) {
        eventStore.onAddEvent(this.eventName, this.eventLocation);
        this.eventName = "";
        this.eventLocation = "";
    }

    @action.bound
    onChangeEventName(event) {
        this.eventName = event.target.value;
    }

    @action.bound
    onChangeEventLocation(event) {
        this.eventLocation = event.target.value;
    }

    render() {
        return (
            <div>
                <input onChange={this.onChangeEventName} type="text" value={this.eventName} placeholder="Event name"/>
                <input onChange={this.onChangeEventLocation} type="text" value={this.eventLocation} placeholder="Event location"/>
                <button onClick={this.onAddEvent}>Add Event</button>
            </div>)
    }
}
export default AddEvent
