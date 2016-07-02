import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCNTm0LChsXyJvBYoUCGzgei-FE9DuraP0';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});

// Downwards data flow.  The most parent should be responsible for fetching it
// index is the most parent.  The components are children of index.js App

const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
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
