import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrainButton from './TrainButton';
import ReactPaginate from 'react-paginate';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.renderEntity = this.renderEntity.bind(this);
    this.state = {
      data: [],
      pageCount: 0,
      disableButtonArray: []
    }
    this.entityPerPage = 10;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.hits.slice(0, this.entityPerPage),
      pageCount: Math.ceil(nextProps.hits.length / this.entityPerPage),
      disableButtonArray: nextProps.disableButtonReducer.slice(0, this.entityPerPage)
    });
  }

  parseAuthor(author) {
    return `${author.given} ${author.family}`;
  }

  renderEntity(data, index) {
    const title=(data.title[0] ? data.title[0] : '__title_not_present__');
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
        <TrainButton textTrain={title} disableButton={this.state.disableButtonArray[index]} indexDisableButton={index}/>
      </div>
    );
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.entityPerPage);
    this.setState({
      data: this.props.hits.slice(offset, offset + 10),
      disableButtonArray: this.props.disableButtonReducer.slice(offset, offset + 10)
    });
  }

	render() {
    let numHitsDisplay;
    if (this.props.numHits) {
      numHitsDisplay = <p className='text-left'>{this.props.numHits} items</p>;
    }

    let paginateDisplay;
    if (this.state.pageCount > 0) {
      paginateDisplay = <ReactPaginate previousLabel={"previous"}
                                       nextLabel={"next"}
                                       breakLabel={<a href="">...</a>}
                                       breakClassName={"break-me"}
                                       pageCount={this.state.pageCount}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       onPageChange={this.handlePageClick}
                                       containerClassName={"pagination"}
                                       subContainerClassName={"pages-pagination"}
                                       activeClassName={"active"} />;
    }

		return (
			<div className='search-results'>
        {numHitsDisplay}
        {this.state.data.map(this.renderEntity)}
        {paginateDisplay}
      </div>
		);
	}
}

function mapStateToProps({ hits, numHits, disableButtonReducer }) {
	return { hits, numHits, disableButtonReducer };
}

export default connect(mapStateToProps)(SearchResults);