import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { trainClassifier, disableTrainButton } from '../actions';

class TrainButton extends Component {
  constructor(props) {
		super(props);

		this.state = { category: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ category: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.trainClassifier(this.props.textTrain, this.state.category, this.props.indexOfEntity);
		this.props.disableTrainButton(this.props.indexOfEntity);
    this.refs.btn.setAttribute('disabled', 'disabled');
		this.refs.inp.setAttribute('disabled', 'disabled');
	}

	componentDidMount() {
		if (this.props.disableButton) {
			this.refs.btn.setAttribute('disabled', 'disabled');
			this.refs.inp.setAttribute('disabled', 'disabled');
			this.setState({ category: this.props.trainedCategory });
		}
	}

  render() {
    return (
			<div>
      	<form onSubmit={this.onFormSubmit} className="input-group">
					<input
						placeholder="Enter category"
						className="form-control"
						value={this.state.category}
						onChange={this.onInputChange}
						ref="inp"
					/>
					<span className="input-group-btn">
						<button type="submit" ref="btn" className="btn btn-default">Train</button>
					</span>
				</form>
			</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ trainClassifier, disableTrainButton }, dispatch);
}

export default connect(null, mapDispatchToProps)(TrainButton);