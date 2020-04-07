import React from 'react';
import { Greetings } from './greetings/greetings.js';
import { FavDessert } from './fav-dessert/fav-dessert.js';
import { YourState } from './your-state/your-state.js';
import { DisableButton } from './disable-button/disable-button.js';
import { VisitedCities } from './visited-cities/visited-cities.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

function Form() {
  return (
    <Router>
        <div className="back-button">
        <button className="button">⬅</button>
        <span>Form Components</span>
        </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/favouriteDessert">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/visitedCities">Visited Cities</Link>
            </li>
            <li>
              <Link to="/yourState">Your State</Link>
            </li>
            <li>
              <Link to="/disableButton">Disable Button</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/greetings">
            <Greetings/>
          </Route>
          <Route path="/favouriteDessert">
            <FavDessert dessertList={["Vanilla","Butterscotch","Gulab Jamum","Yoghurt Pots","Baked Bananas","Chocolate"]}/>
          </Route>
          <Route path="/visitedCities">
            <VisitedCities visitedCities={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/>
          </Route>
          <Route path="/yourState">
            <YourState stateList={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
          </Route>
          <Route path="/disableButton">
          <DisableButton/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export { Form }
