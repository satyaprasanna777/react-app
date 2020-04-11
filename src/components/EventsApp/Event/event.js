import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Event extends React.Component{
    constructor(props){
        super(props);
    }
    @observable isEditEvent=false;
    @observable eventName=event.name;
    @observable eventLocation=event.location;
    
    @action.bound
    onDeleteEvent(){
        
    }
    
    @action.bound
    onChangeEventName(){
        
    }
    
    @action.bound
    onChangeEventLocation(){
        
    }
    
    @action.bound
    onUpdateEventDetails(){
        
    }
}
export default Event;






