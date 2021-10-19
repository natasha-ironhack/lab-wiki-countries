import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
//import Home from './components/Home';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

//Iteration 3 | Set the state when the component mounts
// Our App.js application should have its own state
// holding one property,countries, holding the data coming
// from the countries.json file. The state should be set
// only once the component is rendered to the DOM, using
// the lifecycle method componentDidMount() .

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <h1>Countries</h1>
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
              <Route path="/country/:cca3" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
