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

import React from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import MyProjects from './components/my-projects'
import './App.css'
//import CounterPage from './components/CounterPage/index';
//import { Home } from './components/home/home.js';
import { CarsList } from './components/CarsList/index'
import { TodosList } from './components/TodosList/todos'
import { Form } from './components/form-components/form-component'
import CountriesDashboardApp from './components/countries-dash-board-app/countries-dash-board-app'
import CountryDetails from './components/countries-dash-board-app/countryDetails'
import EmojiGame from './components/EmojiGame/emojiGame'
import MouseTracker, { HoverExample } from './components/examples/examples'
import TodoApp from './components/TodoAppMobx/todoApp'
import EventsApp from './components/EventsApp/eventsApp'
import GridMemoryGameApp from './components/GridMemoryGameApp/index'
import './components/TodosList/todos.css'
import themeStore from './stores/ThemeStore/index'
import UsersPage from './components/UsersPage'
import TodosAppWithApi from './components/TodosAppWithApi'
import LoginPage from './components/LoginPage'
//import stores from './stores';

import OnlineShoppingApp from './OnlineShoppingApp/components'
import stores from './common/stores'
import { SignInRoute } from './AuthenticationPage/routes/SignInRoute'
import { PracticeAdvancedConceptsRoute } from './common/routes/PracticeAdvancedConceptsRoute/PracticeAdvancedConceptsRoute'
// import { SignInPage } from "./AuthenticationPage/components/SignInPage";

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
         <Provider {...stores}>
            <Router>
               <div>
                  <Switch>
                     <Route path='/grid-memory-game'>
                        <GridMemoryGameApp
                           selectedTheme={this.getCurrentTheme()}
                           onChangeTheme={this.onChangeTheme}
                        />
                     </Route>
                     <Route path='/events-app-mobx'>
                        <EventsApp />
                     </Route>
                     <Route path='/todo-app-mobx'>
                        <TodoApp />
                     </Route>
                     {/*<Route exact path="/counter-page">
            <CounterPage />
          </Route>*/}
                     <Route exact path='/page-1'>
                        <Page1 />
                     </Route>
                     <Route exact path='/my-projects'>
                        <MyProjects />
                     </Route>
                     <Route path='/carsList'>
                        <CarsList />
                     </Route>
                     <Route path='/todosList'>
                        <TodosList />
                     </Route>
                     <Route path='/formComponents'>
                        <Form />
                     </Route>
                     <Route exact path='/countriesDashboardApp/:countryDetails'>
                        <CountryDetails
                           selectedTheme={this.getCurrentTheme()}
                           onChangeTheme={this.onChangeTheme}
                        />
                     </Route>
                     <Route exact path='/countriesDashboardApp'>
                        <CountriesDashboardApp
                           selectedTheme={this.getCurrentTheme()}
                           onChangeTheme={this.onChangeTheme}
                        />
                     </Route>
                     <Route path='/emojiGame'>
                        <EmojiGame
                           selectedTheme={this.getCurrentTheme()}
                           onChangeTheme={this.onChangeTheme}
                        />
                     </Route>

                     <Route path='/users-page' component={UsersPage}></Route>
                     <Route
                        path='/todos-with-api'
                        component={TodosAppWithApi}
                     ></Route>
                     <Route
                        path='/online-shopping-app'
                        component={OnlineShoppingApp}
                     ></Route>
                     <Route
                        path='/sign-in-route'
                        component={SignInRoute}
                     ></Route>
                     <Route path='/login-page'>
                        <LoginPage />
                     </Route>
                     <Route path='/private-advanced-concepts'>
                        <PracticeAdvancedConceptsRoute />
                     </Route>
                     <Route path='/example'>
                        <HoverExample />
                     </Route>
                     <Route path='/'>
                        <HomePage />
                     </Route>
                  </Switch>
               </div>
            </Router>
         </Provider>
      )
   }
}

export default App
