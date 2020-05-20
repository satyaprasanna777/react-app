import React from "react";
import { observer } from 'mobx-react';
import { Link, Redirect } from "react-router-dom";
import logo from "../../logo.svg";
import loginStore from '../../stores/LoginStore';

@observer
class App extends React.Component {
  gotoGridScreenIfLoggedIn = () => {
    return (
      <Redirect
      to={{
        pathname:'/grid-memory-game',
      }}
      />
    )
  }
  render() {
    console.log("in app", loginStore.token)
    if (loginStore.token) {
      return this.gotoGridScreenIfLoggedIn();
    }
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/page-1">Page 1</Link>
        <Link to="/my-projects">My Projects</Link>
        <Link to="/login-page">LoginPage</Link>
        <Link to="/private-advanced-concepts">Private Advanced Concepts</Link>
      </header>
    </div>
    );
  }
}
export default App;
