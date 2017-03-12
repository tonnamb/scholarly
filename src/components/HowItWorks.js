import React, { Component } from 'react';

class HowItWorks extends Component {
  render() {
    return (
      <div>
        <h4>How it works:</h4>
        <p>1. Enter search query to search <a href="http://search.crossref.org/">Crossref</a> database</p>
        <p>2. Enter category for items to train your model. Try 'useful'</p>
        <p>3. Click 'Apply machine learning' to see classification results</p>
      </div>
    );
  }
}

export default HowItWorks;