import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ShowEvents from './components/events/ShowEvents';
import OwnerReg from './components/owner/OwnerReg';
import Calendar from "./components/calendar/Calendar";
import Profile from "./components/profile/Profile";
//import Header from "./components/header/Header"; 
import { Provider } from 'react-redux';
import store from './store/store';

import Categories from './components/categories/Categories';
 
//import PetSlider from './components/common/slider/PetSlider';
//import CategoriesReTabs from './components/categories/CategoriesReTabs';
//import CategoriesSideNav from './components/categories/CategoriesSideNav';
//import Todos from './Todos';
 
 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            
            <Categories >
              <Switch>
                <Route exact path="/" component={ ShowEvents } />
              </Switch>
            </Categories> 
            <div className="container">
              <Route exact path="/register" component={ OwnerReg } />
              <Route exact path="/profile" component={ Profile } />
              <Route exact path="/calendar" component={ Calendar } />
            </div>
          </div>
        </Router> 
      </Provider>
    ); 
  }
}

export default App;
 