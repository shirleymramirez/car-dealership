import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/layout/TopNav'
import Login from './components/auth/Login'
import LandingPage from './components/layout/LandingPage'
import CarLists from './components/cars/CarLists'
import CarInfo from './components/cars/CarInfo'
import NewCarForm from './components/cars/NewCarForm'
import CarEditForm from './components/cars/CarEditForm'
import LocationLists from './components/locations/LocationLists'
import LocationInfo from './components/locations/LocationInfo'
import NewLocationForm from './components/locations/NewLocationForm'

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/users/login" component={Login} />
          <Route exact path="/cars" component={CarLists} />
          <Route exact path="/cars/new" component={NewCarForm} />
          <Route exact path="/cars/:car_id" component={CarInfo} />
          <Route exact path="/cars/edit/:car_id" component={CarEditForm} />
          <Route exact path="/locations" component={LocationLists} />
          <Route exact path="/locations/new" component={NewLocationForm} />
          <Route exact path="/locations/:location_id" component={LocationInfo} />
          <Route path="*" render={() => <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
