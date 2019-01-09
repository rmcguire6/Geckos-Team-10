import React, { Component } from 'react';
import BeerList from './BeerList';
import Hero from './Hero';
import SearchFilters from './SearchFilters';
import getBeers from '../utils/BeerAPI';
import { getRandomBeer, displayUniqueBeers, createFilteredBeerList } from '../utils/Helpers';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.displayRandomBeer = this.displayRandomBeer.bind(this);
    this.handleAlcoholFilterChange = this.handleAlcoholFilterChange.bind(this);
    this.state = {
      data: [],
      randomBeer: {},
      beers: [],
      error: '',
      isLoading: true,
      alcoholFilter: []
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
        data,
        randomBeer: oneRandomBeer,
        beers: beers
      }));
    }
  }

  componentDidMount() {
    this.displayRandomBeer();
  }
  handleAlcoholFilterChange = (alcoholFilter) => {
    if (alcoholFilter.length > 0) {
      this.setState(() => ({
        alcoholFilter
      }));
      //console.log('alcoholFilter is ',alcoholFilter )
    } else {
      console.log('No filtered beers')
    }
  }

  render() {
    let filteredBeerList = createFilteredBeerList(this.state.data,'abv', this.state.alcoholFilter)
    return (
      <div>
        <Hero random={this.state.randomBeer} />
        <SearchFilters handleAlcoholFilterChange={this.handleAlcoholFilterChange}/>
        {filteredBeerList.length > 0 ? <h2>Filtered Beers</h2> : <h2>Beers</h2>}
        {this.state.alcoholFilter.length > 0 ? <BeerList beers={filteredBeerList}/> : <BeerList beers={this.state.beers} />}
      </div>
    );
  }
}

export default HomePage;
