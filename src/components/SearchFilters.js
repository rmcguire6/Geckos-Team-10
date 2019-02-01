import React, {Component} from 'react';

class SearchFilters extends Component {
    constructor(props) {
        super(props)
    }
       
    handleAlcoholFilterChange = (e) => {
        e.preventDefault();
        let alcoholFilter = e.target.value;
        this.props.handleAlcoholFilterChange(alcoholFilter);
       } 
    handleIBUFilterChange = (e) => {
        e.preventDefault();
        let ibuFilter = e.target.value;
        this.props.handleIBUFilterChange(ibuFilter);
    } 
    handleTypeFilterChange = (e) => {
        e.preventDefault();
        let typeFilter = e.target.value;
        this.props.handleTypeFilterChange(typeFilter);
    } 
    render() {
        return (
    <div className="filter-group">
      <select className="filter" onChange={this.handleAlcoholFilterChange}>
          <option value="">Alcohol Content</option>
          <option value="  0,1">Alcohol Less Than 1%</option>
          <option value="  1,4">Alcohol 1% to  less than 4%</option>
          <option value="  4,7">Alcohol 4% to less than 7%</option>
          <option value="  7,10">Alcohol 7% to less than 10%</option>
          <option value=" 10,90">Alcohol 10% or greater</option>
      </select>
      <select className="filter" onChange={this.handleIBUFilterChange}>
          <option value="">Bitterness Level</option>
          <option value="  0,24">IBU Less Than 25</option>
          <option value=" 25,49">IBU 25 to 49</option>
          <option value=" 50,74">IBU 50 to 74</option>
          <option value=" 75,99">IBU 75 to 99</option>
          <option value="100,120">IBU 100 or more</option>
      </select>
      <select className="filter" onChange={this.handleTypeFilterChange}>
          <option value="">Beer Type</option>
          <option value="ale">Ales but Not India Pale Ales(IPA's)</option>
          <option value="IPA">IPA's</option>
          <option value="lager">Lagers</option>
          <option value="stout">Stouts</option>
          <option value="wheat">Wheat Beers</option>
      </select>
    </div>
        )
    }
}
export default SearchFilters;