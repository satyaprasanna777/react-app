import React from 'react';
class YourState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedState: "",
            submittedState: ""
        }
    }
    handleChangeState = (event) => {
        this.setState({ selectedState: event.target.value })
    }
    handleSubmit = () => {
        this.setState({ submittedState: this.state.selectedState })
    }
    displayMessage = () => {
        if (this.state.submittedState !== "")
            return <p>I am from "{this.state.submittedState}" state</p>
    }
    renderStateList = () => {
        return (this.props.stateList.map(eachItem => <option value={eachItem}>{eachItem}</option>))
    }
    render() {
        return (
            <div>
                <select onChange={this.handleChangeState}>
                    <option value="select your state" selected disabled>SelectYour State</option>
                    {this.renderStateList()}
                </select>
                <input type="submit" onClick={this.handleSubmit}/>
                {this.displayMessage()}
            </div>);
    }
}
export { YourState }
