import React, { Component } from 'react';
import BeerList from './BeerList';
import Hero from './Hero';
import getBeers from '../utils/BeerAPI';
import { getRandomBeer, displayUniqueBeers } from '../utils/Helpers';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.displayRandomBeer = this.displayRandomBeer.bind(this);
    this.state = {
      randomBeer: {},
      beers: [],
      error: '',
      isLoading: true
    };
  }

  // get a random beer for the hero
  // display random six beers in main body
  async displayRandomBeer() {
    const data = await getBeers();
    if (data) {
      let oneRandomBeer = getRandomBeer(data);
      let beers = displayUniqueBeers(data);
      this.setState(() => ({
        randomBeer: oneRandomBeer,
        beers: beers
      }));
    }
  }

  componentDidMount() {
    this.displayRandomBeer();
  }

  render() {
    return (
      <div>
        <Hero random={this.state.randomBeer} />
        <BeerList beers={this.state.beers} />
      </div>
    );
  }
}

export default HomePage;
