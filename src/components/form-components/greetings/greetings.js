import React from 'react';
class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInputText: "",
            displayName: ""
        }
    }
    handleUserInput = (event) => {
        this.setState({ userInputText: event.target.value })
    }
    handleSubmit = (event) => {
        this.setState({ displayName: this.state.userInputText, userInputText: "" })
        event.preventDefault()
    }
    displayMessage = () => {
        if (this.state.displayName !== "")
            return <p>Hello {this.state.displayName}, Have a nice day!</p>
    }
    render() {
        return (
            <div>
                <form>
                    <input typt="text" placeHolder="Enter name" value={this.state.userInputText} onChange={this.handleUserInput}/>
                    <input type="submit" value="Greet" onClick={this.handleSubmit}/>
                </form>
                {this.displayMessage()}
            </div>);
    }
}
export { Greetings }
