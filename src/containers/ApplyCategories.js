import React, { Component } from 'react';
import { connect } from 'react-redux';

class ApplyCategories extends Component {
  constructor(props) {
    super(props);
    this.renderCategory = this.renderCategory.bind(this);
  }

  renderCategory(category) {
    let categoryDisplay;
    if (category[1] > 0) {
      categoryDisplay = (<a href="#"><span className="badge">{category[1]}</span> {category[0]}</a>);
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
        {Object.entries(this.props.categories).map(this.renderCategory)}
      </div>
    );
  }
}

function mapStateToProps({ applyStore, categories }) {
	return { applyStore, categories };
}

export default connect(mapStateToProps)(ApplyCategories);

