import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import ApplyButton from './ApplyButton';
import HowItWorks from '../components/HowItWorks';

class SearchDisplay extends Component {
  render() {
    let searchContainers;
    if (this.props.mode === 'search') {
      searchContainers = (
        <div>
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <SearchBox />
			      <SearchResults />
            <ApplyButton />
          </div>
          <div className="col-xs-12 col-md-2">
              <HowItWorks />
          </div>
        </div>
      );
    }

    return (
      <div className="row">
          {searchContainers}
      </div>
    );
  }
}

function mapStateToProps({ mode }) {
	return { mode };
}

export default connect(mapStateToProps)(SearchDisplay);