import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import ApplyButton from './ApplyButton';

class SearchDisplay extends Component {
  render() {
    let searchContainers;
    if (this.props.mode === 'search') {
      searchContainers = (
        <div>
          <SearchBox />
			    <SearchResults />
          <ApplyButton />
        </div>
      );
    }

    return (
      <div>
        {searchContainers}
      </div>
    );
  }
}

function mapStateToProps({ mode }) {
	return { mode };
}

export default connect(mapStateToProps)(SearchDisplay);