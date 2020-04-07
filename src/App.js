// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";

// import "./App.css";

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import MyProjects from "./components/my-projects";
import "./App.css";
import { Home } from './components/home/home.js'
import { CarsList } from './components/CarsList/index';
import { TodosList } from './components/TodosList/todos.js';
import { Form } from './components/form-components/form-component.js'
import CountriesDashboardApp from './components/countries-dash-board-app/countries-dash-board-app.js'
import CountryDetails from './components/countries-dash-board-app/countryDetails.js'
import EmojiGame from './components/EmojiGame/emojiGame.js';
import { Examples } from './components/examples/examples.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ selectedTheme: 'Light mode' })
  }
  onChangeTheme = () => {
    if (this.state.selectedTheme === 'Light mode')
      this.setState({ selectedTheme: "Dark mode" })
    else
      this.setState({ selectedTheme: "Light mode" })
  }
  render() {
    return (
      <Router>                                
      <div>                      
        <Switch>                                   
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/my-projects">
          <MyProjects/>
        </Route>
        <Route path="/carsList">
          <CarsList />
        </Route>
        <Route path="/todosList">
          <TodosList/>
        </Route>
        <Route path="/formComponents">
          <Form/>
        </Route>
        <Route exact path="/countriesDashboardApp/:countryDetails">
          <CountryDetails selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route exact path="/countriesDashboardApp">
          <CountriesDashboardApp selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route path="/emojiGame">
          <EmojiGame selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route path="/examples">
          <Examples/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
