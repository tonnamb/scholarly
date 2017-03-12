import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApplyResults from './ApplyResults';
import HowItWorks from '../components/HowItWorks';
import ApplyCategories from './ApplyCategories';

class SearchDisplay extends Component {
  render() {
    let applyContainers;
    if (this.props.mode === 'apply') {
      applyContainers = (
        <div>
          <div className="col-xs-12 col-md-2">
            <ApplyCategories />
          </div>
          <div className="col-xs-12 col-md-8">
            <h4>Classified results of '{this.props.query}' query:</h4>
            <ApplyResults />
          </div>
          <div className="col-xs-12 col-md-2">
            <HowItWorks />
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        {applyContainers}
      </div>
    );
  }
}

function mapStateToProps({ mode, query }) {
	return { mode, query };
}

export default connect(mapStateToProps)(SearchDisplay);