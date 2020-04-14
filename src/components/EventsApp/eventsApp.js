import React from 'react';
import AddEvent from './AddEvent/addEvent'
import EventList from './EventList/eventList'
import eventStore from './../../stores/EventStore/eventStore';

class EventsApp extends React.Component {
    render() {
        return (
            <div>
                <AddEvent/>
                <EventList events={eventStore.events}/>
            </div>
        );
    }
}
export default EventsApp;
