//import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
//import Home from './components/Home';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
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

export default App;
