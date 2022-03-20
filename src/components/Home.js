import React, { Component } from 'react';
import ControlledCarousel from './Carousel';
import '../index.css';

class Home extends Component {

  render() {
    return(
      <div>
        <div className="container jumbotron my-5 text-white">
          <h1 className="display-3">Wanderlust:</h1>
          <h1 className="display-4"> is defined as a strong desire to travel.</h1>
          <p className="lead">Identify with the feeling? Then take the steps towards making your dream destinations a reality.</p>
          <p className="lead">Write out your dream bucket list , organize, and map your itineraries in a free travel app designed for vacations and road trips.</p>
          <p className="lead">
          <a className="btn btn-primary btn-md" href="/trips" role="button">start planning your next trip</a>
          </p>
        </div>
      <ControlledCarousel />

      </div>
    )
  }
}
export default Home;
