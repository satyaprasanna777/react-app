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
import CounterPage from './components/CounterPage/index.js'
import { Home } from './components/home/home.js'
import { CarsList } from './components/CarsList/index';
import { TodosList } from './components/TodosList/todos.js';
import { Form } from './components/form-components/form-component.js'
import CountriesDashboardApp from './components/countries-dash-board-app/countries-dash-board-app.js'
import CountryDetails from './components/countries-dash-board-app/countryDetails.js'
import EmojiGame from './components/EmojiGame/emojiGame.js';
import { Examples } from './components/examples/examples.js';
import CounterApp from './components/CounterApp/counterApp.js';
import TodoApp from './components/TodoAppMobx/todoApp.js'
import EventsApp from './components/EventsApp/eventsApp.js'
import './components/TodosList/todos.css'


import { observer } from 'mobx-react'

import themeStore from './stores/ThemeStore/index.js'

import { configure } from 'mobx'

import {
  BrowserRouter as Router,
  Switch,
  Route
}
from "react-router-dom";

//configure({ enforceActions: 'observed' });

@observer
class App extends React.Component {
  getCurrentTheme = () => {
    return themeStore.selectedTheme
  }
  onChangeTheme = () => {
    themeStore.setCurrentTheme()
  }
  render() {
    return (
      <Router>                                
      <div>                      
        <Switch>  
         <Route exact path="/events-app-mobx">
          <EventsApp />
        </Route>
        <Route exact path="/todo-app-mobx">
          <TodoApp />
        </Route>
        <Route exact path="/counter-page">
          <CounterPage />
        </Route>
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
          <CountryDetails selectedTheme={this.getCurrentTheme()} 
                          onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route exact path="/countriesDashboardApp">
          <CountriesDashboardApp selectedTheme={this.getCurrentTheme()} 
                                 onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route path="/emojiGame">
          <EmojiGame selectedTheme={this.getCurrentTheme()} 
                     onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route path="/counter-app">
          <CounterApp/>
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
