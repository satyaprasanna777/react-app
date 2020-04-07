import React from 'react';
class FavDessert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDessert: "",
            favoriteDessert: ""
        }
    }
    handleUserInput = (event) => {
        this.setState({ selectedDessert: event.target.value })
    }
    handleSubmit = () => {
        this.setState({ favoriteDessert: this.state.selectedDessert })
    }
    displayMessage = () => {
        if (this.state.favoriteDessert !== "")
            return <p>My favourite dessert is {this.state.favoriteDessert.toUpperCase()}</p>
    }
    renderDessertOptions = () => {
        return (this.props.dessertList.map(eachItem => {
            return (<div>
            <input type="radio" value={eachItem} name="favDessert" />
            <label>{eachItem}</label>
            </div>)
        }))
    }
    render() {
        console.log(this.props.dessertList)
        return (
            <div>
                <p>What is your favourite dessert?</p>
                <form onChange={this.handleUserInput}>
                {this.renderDessertOptions()}
                </form>
                <input type="submit" value="Make your choice" onClick={this.handleSubmit}/>
                {this.displayMessage()}
            </div>)
    }
}
export { FavDessert }
