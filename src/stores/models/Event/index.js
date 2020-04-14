import { observable, action } from 'mobx';
class Event {
    @observable id;
    @observable name;
    @observable location;
    constructor(name, location) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.location = location;
    }
    @action.bound
    onUpdateEventDetails() {

    }
}
export default Event;
