import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeClass } from '../actions';
import ReactPaginate from 'react-paginate';

class ApplyResults extends Component {
  constructor(props) {
    super(props);
    this.renderEntity = this.renderEntity.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
    this.state = {
      data: [],
      pageCount: 0,
      pageNumber: 1
    }
    this.entityPerPage = 10;
  }

  componentWillReceiveProps(nextProps) {
    const filteredClassified = nextProps.classified.filter(this.filterFunction(nextProps.displayFilter));
  
    this.setState({
      data: filteredClassified.slice(0, this.entityPerPage),
      pageCount: Math.ceil(filteredClassified.length / this.entityPerPage)
    });
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

  filterFunction(displayFilter) {
    return (item) => {
        if (displayFilter === 'all') {
        return true;
      } else {
        return item.classification === displayFilter;
      }
    }
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.entityPerPage);
    const filteredClassified = this.props.classified.filter(this.filterFunction(this.props.displayFilter));

    this.setState({
      data: filteredClassified.slice(offset, offset + this.entityPerPage),
      pageNumber: selected + 1
    });
  }

	render() {
    let paginateDisplay;
    if (this.state.pageCount > 1) {
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
			<div className='apply-results'>
        {this.state.data.map(this.renderEntity)}
        {paginateDisplay}
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