import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApplyResults from './ApplyResults';

class SearchDisplay extends Component {
  render() {
    let applyContainers;
    if (this.props.mode === 'apply') {
      applyContainers = (
        <div>
          <div>
            <h4>Classified results of '{this.props.query}' query:</h4>
          </div>
          <ApplyResults />
        </div>
      );
    }

    return (
      <div>
        {applyContainers}
      </div>
    );
  }
}

function mapStateToProps({ mode, query }) {
	return { mode, query };
}

export default connect(mapStateToProps)(SearchDisplay);