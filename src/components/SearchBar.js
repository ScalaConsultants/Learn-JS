import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
	    this.props.onUserInput(
	      	this.refs.filterTextInput.value
	    );
	  }

	render() {
		return (
			<input type="search" placeholder="Search recipes..."
					value={this.props.filterPhrase}
		          ref="filterTextInput"
		          onChange={this.handleChange}
			/>
		);
	}
}

SearchBar.propTypes = {
	filterPhrase: React.PropTypes.string
}

export default SearchBar;