import React, { Component } from 'react';
//list should always be rendered, along with navBar.
//Details will always be a click and managed in a route.
//want to record the dynamic route it will have. ex: go to /aub?
//this is a param, that you want to display. but if you go to /por,
// it'll be a diff. country  . pass a country as a prop

//don't need navbar in json

//for navbar display link to go back home

//fopr evert element in this array, i want to display a link

export default class CountriesList extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </div>
    );
  }
}
//use map not ul?
