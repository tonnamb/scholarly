import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCategory } from '../actions';

class ApplyCategories extends Component {
  constructor(props) {
    super(props);
    this.countCategories = this.countCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
  }

  handleClick(category) {
    this.props.selectCategory(category);
  }

  countCategories() {
    const categories = { all: 0 };
    const items = this.props.classified;
    const itemsLength = items.length;
    for (let i=0; i<itemsLength; i++) {
      categories.all += 1;
      if (!categories[items[i].classification]) {
        categories[items[i].classification] = 1;
      } else {
        categories[items[i].classification] += 1;
      }
    }
    return categories;
  }

  renderCategory(category) {
    let categoryDisplay;
    if (category[1] > 0) {
      categoryDisplay = (<a href="#" onClick={() => this.handleClick(category[0])}><span className="badge">{category[1]}</span> {category[0]}</a>);
    }
    return (
      <div key={category[0]}>
        {categoryDisplay}
      </div>
    );
  }

  render() {
    return (
      <div>
        {Object.entries(this.countCategories()).map(this.renderCategory)}
      </div>
    );
  }
}

function mapStateToProps({ classified }) {
	return { classified };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyCategories);

