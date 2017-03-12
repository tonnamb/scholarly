import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeClass } from '../actions';

class ApplyResults extends Component {
  constructor(props) {
    super(props);
    this.renderEntity = this.renderEntity.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
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
    const classification=data.classification;
    return (
      <div className='apply-entity' key={url}>
        <a href={url}>{title}</a>
        <p>{author.join(', ')}</p>
        <p>{journal}, {year} - {publisher}</p>
        <p>Classified as: {classification}</p>
      </div>
    );
  }

  filterFunction(item) {
    if (this.props.displayFilter === 'all') {
      return true;
    } else {
      return item.classification === this.props.displayFilter;
    }
  }

	render() {
    const filteredClassified = this.props.classified.filter(this.filterFunction);
		return (
			<div className='apply-results'>
        {filteredClassified.map(this.renderEntity)}
      </div>
		);
	}
}

function mapStateToProps({ classified, displayFilter }) {
	return { classified, displayFilter };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ storeClass }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyResults);