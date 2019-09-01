import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/layout/TopNav'
import Login from './components/auth/Login'
import CarLists from './components/cars/CarLists'
import CarInfo from './components/cars/CarInfo'
import NewCarForm from './components/cars/NewCarForm'
import CarEditForm from './components/cars/CarEditForm'

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" component={CarLists} />
          <Route path="/users/login" component={Login} />
          <Route path="/cars/:car_id" component={CarInfo} />
          <Route path="/cars" component={NewCarForm} />
          <Route path="/cars/edit/:car_id" component={CarEditForm} />
          <Route path="/locations/:location_id" component={Location} />
          <Route path="*" render={() => <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
