import React, { Component } from 'react';
import BeerList from './BeerList';
import Header from './Header';
import Hero from './Hero';
import SearchBar from './SearchBar';
import Footer from './Footer';
import SearchFilters from './SearchFilters';

import getBeers from '../utils/BeerAPI';
import { getRandomBeer, displayUniqueBeers, filterByValue} from '../utils/Helpers';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.displayRandomBeer = this.displayRandomBeer.bind(this);
    this.handleAlcoholFilterChange = this.handleAlcoholFilterChange.bind(this);
    this.handleIBUFilterChange = this.handleIBUFilterChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleTypeFilterChange = this.handleTypeFilterChange.bind(this);
    this.state = {
      data: [],
      randomBeer: {},
      beers: [],
      isLoading: true,
      alcoholFilter: [],
      ibuFilter: [],
      searchText: '',
      typeFilter: '',
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
  handleSearchChange = (searchText) => {
    if (searchText.length > 0) {
      this.setState(() => ({
        filter: 'text',
        searchText: searchText
      }));
    }
  }
  handleTypeFilterChange = (typeFilter) => {
    if (typeFilter.length > 0) {
      this.setState(() => ({
        filter: 'type',
        typeFilter: typeFilter
      }));
      console.log('props filter filterBy', this.state.filter,this.state.filterBy  )
    }
  }
  render() {
    let filteredBeerList = []
    {this.state.filter === 'text'? 
     filteredBeerList = this.state.data.filter(beer => beer.name.toLowerCase().includes(this.state.searchText.toLowerCase())) :
     filteredBeerList = filterByValue(this.state.data, this.state.filter, this.state.filterBy) }
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
        <Hero random={this.state.randomBeer} />
        <div className="search">
        <SearchBar
         handleSearchChange={this.handleSearchChange}
        />
        <SearchFilters
          handleAlcoholFilterChange={this.handleAlcoholFilterChange}
          handleIBUFilterChange={this.handleIBUFilterChange}
          handleTypeFilterChange={this.handleTypeFilterChange}
          />
        </div>
        {filteredBeerList.length > 0 ? <h2>Filtered Beers</h2> : <h2>Beers</h2>}
        {filteredBeerList.length > 0 ? <BeerList beers={filteredBeerList}/> : <BeerList beers={this.state.beers} />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
