import React, {Component} from 'react';
import axios from 'axios';
import BeerList from './BeerList';
import Hero from './Hero';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state ={randomBeer:{}, beers:[], error:'', isLoading:true};
}
 
 //get a random beer and a list of beers 
 componentDidMount(){
    const root_api = "https://api.punkapi.com/v2/";
    var self = this;
   axios.all([
    axios.get(`${root_api}beers/random`),
    axios.get(`${root_api}beers?page=2&per_page=20`)
    
  ])
  .then(axios.spread(function (randomBeerResponse, beerListResponse) {
    // console.log('Random Beer', randomBeerResponse.data);
    // console.log('Beer List', beerListResponse.data);
    self.setState({randomBeer:randomBeerResponse.data[0]})
    self.setState({beers:beerListResponse.data})
         
           
  }))
  .catch(error => this.setState({ error, isLoading: false }));
  
}
  
render(){
   return(
     <div>
       <Hero random = {this.state.randomBeer}/>
       <BeerList beers={this.state.beers}/>
         
     </div>
   )

    
  }
                 
}

export default HomePage;
