import React, { Component } from 'react';
import BeerList from './BeerList';
import Hero from './Hero';
import SearchFilters from './SearchFilters';
import getBeers from '../utils/BeerAPI';
import { getRandomBeer, displayUniqueBeers, createFilteredBeerList } from '../utils/Helpers';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.displayRandomBeer = this.displayRandomBeer.bind(this);
    this.handleAlcoholFilterChange = this.handleAlcoholFilterChange.bind(this);
    this.handleIBUFilterChange = this.handleIBUFilterChange.bind(this);
    this.state = {
      data: [],
      randomBeer: {},
      beers: [],
      isLoading: true,
      alcoholFilter: [],
      ibuFilter: [],
      filterBy: [],
      filter: ''
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
        alcoholFilter: alcoholFilter,
        filter: 'abv',
        filterBy: alcoholFilter
      }));
    } 
  }
  handleIBUFilterChange = (ibuFilter) => {
    if (ibuFilter.length > 0) {
      this.setState(() => ({
        ibuFilter: ibuFilter,
        filter: 'ibu',
        filterBy: ibuFilter
      }));
    } 
  }
  
  render() {
    let filteredBeerList = createFilteredBeerList(this.state.data, this.state.filter, this.state.filterBy)
    return (
      <div>
        <Hero random={this.state.randomBeer} />
        <SearchFilters
          handleAlcoholFilterChange={this.handleAlcoholFilterChange}
          handleIBUFilterChange={this.handleIBUFilterChange}
          />
        {filteredBeerList.length > 0 ? <h2>Filtered Beers</h2> : <h2>Beers</h2>}
        {filteredBeerList.length > 0 ? <BeerList beers={filteredBeerList}/> : <BeerList beers={this.state.beers} />}
      </div>
    );
  }
}

export default Homepage;
