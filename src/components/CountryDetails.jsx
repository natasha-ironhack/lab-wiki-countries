import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountryDetails extends Component {
  render() {
    return <div>{this.props.match.params.cca3}</div>;
  }
}

//find the country information now and display it
