import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountryDetails extends Component {
  state = {
    countries: countries,
    country: null,
  };

  getInfo() {
    const country = this.state.countries.filter((eachCountry) => {
      return eachCountry.cca3 === this.props.match.params.cca3;
    })[0];

    this.setState({ country: country });
  }

  componentDidMount() {
    this.getInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.country &&
      this.props.match.params.cca3 !== prevProps.match.params.cca3
    ) {
      this.getInfo();
    }
    console.log(prevState);
  }

  render() {
    return <div>{this.props.match.params.cca3}</div>;
  }
}

//find the country information now and display it
