import React, { Component } from 'react';
import SearchBox from '../containers/SearchBox';
import SearchResults from '../containers/SearchResults';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-8 col-md-offset-2">
						<h3>Scholarly: Enhanced literature search with machine learning</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-8 col-md-offset-2">
						<SearchBox />
						<SearchResults />
					</div>
				</div>
			</div>
		);
	}
}

export default App;