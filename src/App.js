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
import { observer } from 'mobx-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
}
from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import MyProjects from "./components/my-projects";
import "./App.css";
//import CounterPage from './components/CounterPage/index';
//import { Home } from './components/home/home.js';
import { CarsList } from './components/CarsList/index';
import { TodosList } from './components/TodosList/todos';
import { Form } from './components/form-components/form-component'
import CountriesDashboardApp from './components/countries-dash-board-app/countries-dash-board-app'
import CountryDetails from './components/countries-dash-board-app/countryDetails'
import EmojiGame from './components/EmojiGame/emojiGame';
//import { Examples } from './components/examples/examples';
import TodoApp from './components/TodoAppMobx/todoApp'
import EventsApp from './components/EventsApp/eventsApp'
import './components/TodosList/todos.css'
import themeStore from './stores/ThemeStore/index'

//import { configure } from 'mobx'
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
        {/*<Route exact path="/counter-page">
          <CounterPage />
        </Route>*/}
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
        {/*<Route path="/examples">
          <Examples/>
        </Route>*/}
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
