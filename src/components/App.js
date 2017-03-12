import React, { Component } from 'react';
import SearchDisplay from '../containers/SearchDisplay';
import ApplyDisplay from '../containers/ApplyDisplay';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-8 col-md-offset-2">
						<h3>Scholarly: Enhanced literature search with machine learning</h3>
					</div>
				</div>
				<SearchDisplay />
				<ApplyDisplay />
			</div>
		);
	}
}

export default App;