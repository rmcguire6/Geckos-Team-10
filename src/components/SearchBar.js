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
    <div >
    <form className="filter-group" onSubmit={this.handleSearchChange}>
          <input className="filter-search" type="text" name="searchText" placeholder="Search by name" />
          <button className="button">Search</button>
        </form>
    </div>
        )
    }
}
export default SearchBar;