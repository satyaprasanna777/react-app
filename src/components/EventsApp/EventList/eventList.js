import React from 'react';
class EventList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.events);
        return (
            <div>
                hai hello iam here
            </div>)
    }
}
export default EventList;
