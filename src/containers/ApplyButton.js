import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { applyMode, applyFetch, fetchResultsThunk } from '../actions';

class ApplyButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.applyMode();
    this.props.fetchResultsThunk(this.props.query);
  }

  render() {
    let buttonDisplay;
    if (this.props.numHits) {
      buttonDisplay = <button className="btn btn-primary" type="submit" onClick={this.handleClick}>Apply machine learning</button>;
    }

    return (
      <div className="apply-button center-block">
        {buttonDisplay}
      </div>
    );
  }
}

function mapStateToProps({ numHits, query }) {
	return { numHits, query };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ applyMode, applyFetch, fetchResultsThunk }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyButton);