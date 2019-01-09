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

    render() {
        return (
    <div>
      <select onChange={this.handleAlcoholFilterChange}>
          <option value="">No Filter Selected</option>
          <option value=" 0,1">Alcohol Less Than 1%</option>
          <option value=" 1,4">Alcohol 1% to  less than 4%</option>
          <option value=" 4,7">Alcohol 4% to less than 7%</option>
          <option value=" 7,10">Alcohol 7% to less than 10%</option>
          <option value="10,20">Alcohol over 10%</option>
      </select>
    </div>
        )
    }
}
export default SearchFilters;