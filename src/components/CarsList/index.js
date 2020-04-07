// import React from 'react';
// class CarsList extends React.Component{
//     render(){
//         return <div>CarsList Component</div>
//     }
// }
// export {CarsList};
/*global ReactDOM*/
/*global React*/
import React from 'react';

function AddCarButton(props) {
    return (
        <div className="add-car-button">
    <button onClick={props.addCar} className="add-car" id="addCar">Add Car</button>
    </div>);
}
class Car extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "STOPPED",
            speed: 0
        };
        console.log(props);
    }
    onStartOrStop = () => {
        this.state.speed = 0;

        if (this.state.status === "STOPPED")
            this.setState({ status: "RUNNING" });
        else
            this.setState({ status: "STOPPED" });
    }
    onApplyBrake = () => {
        this.setState({ speed: this.state.speed - 10 });
    }
    onAccelerate = () => {
        this.setState({ speed: this.state.speed + 10 });
    }
    displayStatusText = () => {
        if (this.state.status === "STOPPED")
            return <p className="car-status">Status:<span id="carStatus">Stopped</span></p>;
        if (this.state.speed == 0)
            return <p className="car-status">Status:<span id="carStatus">Running</span></p>;
        return <p className="car-status">Status:<span id="carStatus">Running with {this.state.speed}kmph</span></p>;
    }
    render() {
        let startorstop = (this.state.status === "STOPPED") ?
            <button onClick={this.onStartOrStop} className="start-button" id="isStart">Start</button> :
            <button onClick={this.onStartOrStop} className="stop-button" id="isStart">Stop</button>;

        console.log(this.props.carId);

        return (
            <div className="car-app">
                <div className="car-running-status" id="carRunningStatus">
                    <div className="car-row-1">
                        <span>Car:{this.props.carId}</span>
                        <span onClick={()=>this.props.removeCarFromCarsList(this.props.carId)} className="close-button">X</span>
                    </div>
                    <div className="car-row-2">
                       {startorstop}
                       {this.displayStatusText()}
                            <div className="controlling-speeed">
                                <button onClick={this.onAccelerate} disabled={this.state.status==="STOPPED"} className="accelerate-button" id="accelerate">Accelerate</button>
                                <button onClick={this.onApplyBrake} disabled={this.state.speed<=0} className="decelerate-button" id="decelerate">Apply Break</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
class CarsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carsList: [1]

        };
    }
    addCarToCarsList = () => {

        let updatedList = this.state.carsList;
        let carId = (updatedList.length > 0) ? updatedList[updatedList.length - 1] + 1 : 1;
        updatedList.push(carId);
        this.setState({ carsList: updatedList });
    }
    removeCarFromCarsList = (carId) => {
        let updatedList = this.state.carsList;
        let index = updatedList.indexOf(carId);
        updatedList.splice(index, 1);
        this.setState({ carsList: updatedList });
    }
    renderCarsList = () => {
        return this.state.carsList.map(id => <Car key={id.toString()} carId={id} removeCarFromCarsList={this.removeCarFromCarsList}/>);
    }
    render() {
        return <div>
        <AddCarButton addCar={this.addCarToCarsList}/>
        {this.renderCarsList()}
        </div>;
    }
}
//ReactDOM.render(<CarsList/>, rootElement);
export { CarsList };
