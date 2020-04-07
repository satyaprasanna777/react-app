import React from 'react';
class DisableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisableButtonChecked: false,
            showMessage: ""
        }
    }
    handleChange = (event) => {
        console.log(event.target.type)
        if (event.target.type === "checkbox") {
            if (event.target.checked) {
                this.setState({ showMessage: "I am disabled...", isDisableButtonChecked: true })
            }
            else
                this.setState({ isDisableButtonChecked: false, showMessage: "" })
        }
        else {
            console.log("entered")
            this.setState({ showMessage: "I am enabled..." })
        }
    }
    handleSubmit = () => {

    }
    displayMessage = () => {
        if (this.state.displayMessage !== "")
            return <p>{this.state.showMessage}</p>
    }
    render() {
        console.log(this.state.showMessage)
        return (
            <div>
                <input type="checkBox"  onClick={this.handleChange}/>
                <label>Disabled</label>
                <input type="submit" value="Click me" onClick={this.handleChange} disabled={this.state.isDisableButtonChecked}/>
                {this.displayMessage()}
            </div>)
    }
}
export { DisableButton }
