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
   
    render() {
        return (
    <div className="filter-group">
    <div className="filter">
      <select className="filter" onChange={this.handleAlcoholFilterChange}>
          <option value="">No Filter Selected</option>
          <option value="  0,1">Alcohol Less Than 1%</option>
          <option value="  1,4">Alcohol 1% to  less than 4%</option>
          <option value="  4,7">Alcohol 4% to less than 7%</option>
          <option value="  7,10">Alcohol 7% to less than 10%</option>
          <option value=" 10,90">Alcohol 10% or greater</option>
      </select>
      </div>
      <div className="filter">
      <select className="filter" onChange={this.handleIBUFilterChange}>
          <option value="">No Filter Selected</option>
          <option value="  0,24">IBU Less Than 25</option>
          <option value=" 25,49">IBU 25 to 49</option>
          <option value=" 50,74">IBU 50 to 74</option>
          <option value=" 75,99">IBU 75 to 99</option>
          <option value="100,120">IBU 100 or more</option>
      </select>
    </div>
    <div className="filter">
      <select onChange={this.handleTypeFilterChange}>
          <option value="">No Filter Selected</option>
          <option value="ale">Ale</option>
          <option value="IPA">IPA's</option>
          <option value="lager">Lager</option>
          <option value="stout">Stout</option>
          <option value="wheat">Wheat Beer</option>
      </select>
    </div>
    </div>
        )
    }
}
export default SearchFilters;