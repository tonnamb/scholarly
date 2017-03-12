import React, { Component } from 'react';
import { connect } from 'react-redux';

class ApplyResults extends Component {
  constructor(props) {
    super(props);
    this.renderEntity = this.renderEntity.bind(this);
  }

  parseAuthor(author) {
    return `${author.given} ${author.family}`;
  }

  renderEntity(data) {
    const title=(data.title[0] ? data.title[0] : '__title_not_present__');
    const url=data.URL;
    const year=data.created['date-parts'][0][0];
    const author=(data.author ? data.author.map(this.parseAuthor) : ['']);
    const journal=data['container-title'][0];
    const publisher=data.publisher;
    const classification=this.props.classifier.categorize(title);
    return (
      <div className='apply-entity' key={url}>
        <a href={url}>{title}</a>
        <p>{author.join(', ')}</p>
        <p>{journal}, {year} - {publisher}</p>
        <p>Classified as: {classification}</p>
      </div>
    );
  }

	render() {
		return (
			<div className='apply-results'>
        {this.props.applyHits.map(this.renderEntity)}
      </div>
		);
	}
}

function mapStateToProps({ applyHits, classifier }) {
	return { applyHits, classifier };
}

export default connect(mapStateToProps)(ApplyResults);