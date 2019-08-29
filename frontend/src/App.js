import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './components/layout/TopNav'
import Login from './components/auth/Login'
import CarLists from './components/cars/CarLists'

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/cars" component={CarLists}/>
          <Route path="/users/login" component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
