import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
    }
       
    
    handleSearchChange = (e) => {
        e.preventDefault();
        let searchText = e.target.searchText.value.trim();
        this.props.handleSearchChange(searchText);
    } 
    render() {
        return (
    <div className="filter-group">
    <form onSubmit={this.handleSearchChange}>
          <input className="filter" type="text" name="searchText" />
          <button className="button">Search</button>
        </form>
    </div>
        )
    }
}
export default SearchBar;