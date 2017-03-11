import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchResults } from '../actions';

class SearchBox extends Component {
  constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchResults(this.state.term);
		this.setState({ term: '' });
	}

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group search-box">
				<input
					placeholder="Enter search query"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-default">Search</button>
				</span>
			</form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchResults }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBox);