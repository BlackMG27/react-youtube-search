import React, {Component} from 'react';


//be sure to capitalize both parts of the function to work
class SearchBar extends Component{//cmponent has it's own 

	constructor(props){
		super(props);

		//only in the constructor function that we manipulate state like this
		this.state = {term: ''};
		//state, make a new object and assign it to this.state
		//term, as in serch term, is what we want the app to record from the search bar
	}

	render() {
		//controlled component => onchange doesn't change unless state changes
		
		return (
		<div>
		<input className = "search-input" 
		value = {this.state.term}
		onChange = {(event) => this.onInputChange(event.target.value)} /> 
		
		</div>
		);
		//never set this.state  equal to anything
		//this.state autmatically pushes all of the updated material into the div from the event handler
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSeachTermChange(term);
	}

}

//exports the searchBar function to index.js
export default SearchBar;

