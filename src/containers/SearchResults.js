import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.renderEntity = this.renderEntity.bind(this);
  }

  parseAuthor(author) {
    return `${author.given} ${author.family}`;
  }

  renderEntity(data) {
    const title=data.title[0];
    const url=data.URL;
    const year=data.created['date-parts'][0][0];
    const author=(data.author ? data.author.map(this.parseAuthor) : ['']);
    const journal=data['container-title'][0];
    const publisher=data.publisher;
    return (
      <div className='search-entity' key={url}>
        <a href={url}>{title}</a>
        <p>{author.join(', ')}</p>
        <p>{journal}, {year} - {publisher}</p>
      </div>
    );
  }

	render() {
    let numHitsDisplay;
    if (this.props.numHits) {
      numHitsDisplay = <p className='text-right'>{this.props.numHits} results</p>
    }

		return (
			<div className='search-results'>
        {numHitsDisplay}
        {this.props.hits.map(this.renderEntity)}
      </div>
		);
	}
}

function mapStateToProps({ hits, numHits }) {
	return { hits, numHits };
}

export default connect(mapStateToProps)(SearchResults);