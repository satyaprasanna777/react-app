import React from 'react';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';

import Event from '../models/Event'

@observer
class EventStore extends React.Component {
    @observable events = [];

    @action.bound
    onAddEvent(name, location) {
        let newEvent = new Event(name, location);
        this.events.push(newEvent)
        newEvent.push()
    }

    @action.bound
    onDeleteEvent() {

    }

    @computed
    get noOfEvents() {

    }
}
let eventStore = new EventStore();
export default eventStore;
