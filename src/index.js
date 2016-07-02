import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCNTm0LChsXyJvBYoUCGzgei-FE9DuraP0';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));


/*
React code --> components/view
Something that barfs out HTML

We write code and nest components

A component is a collection of JS components that ultimately produces HTML
*/

// Create a new component.  This component should produce HTML
// const declares a variable. A constant variable.
// jsx is a dialect of javascript (looks like HTML)
// webpack and babel transpile the code
// The JSX -> HTML -> documentOM
// JSX -> jav
// React 		--> to create the component
// ReactDom		--> to render to the DOM

// One component for fileascript HTML
