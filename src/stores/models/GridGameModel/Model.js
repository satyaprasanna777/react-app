import { observable } from 'mobx';

class Model {
    @observable id;
    @observable isHidden;

    constructor(cellObject) {
        this.id=cellObject.id;
        this.isHidden=cellObject.isHidden;
    }
}

export default Model;
