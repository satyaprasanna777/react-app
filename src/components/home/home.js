import React from 'react';
import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/carsList">Cars List</Link>
            </li>
            <li>
              <Link to="/todosList">Todos List</Link>
            </li>
            <li>
              <Link to="/formComponents">Form components</Link>
            </li>
            <li>
              <Link to="/countriesDashboardApp">Countries Dash Board App</Link>
            </li>
            <li>
              <Link to="/emojiGame">Emoji Game</Link>
            </li>
            <li>
              <Link to="/examples">Examples</Link>
            </li>
            <li>
              <Link to="/todo-app-mobx">TodoAppMobx</Link>
            </li>
            <li>
              <Link to="/events-app-mobx">EventsAppMobx</Link>
            </li>
            <li>
              <Link to="/grid-memory-game">Grid Memory Game</Link>
            </li>
          </ul>
        </nav>
  }
}
export { Home }
