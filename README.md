### [Demo Site](https://tonnamb.github.io/scholarly/)

How it works:

1. Enter search query to search [Crossref](http://search.crossref.org/) database
2. Enter category for items to train your model. Try 'useful'
3. Click 'Apply machine learning' to see classification results

Made with:
* JavaScript
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org)
* [redux-promise](https://github.com/acdlite/redux-promise)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [bayes](https://github.com/ttezel/bayes)
* [Crossref REST API](https://github.com/CrossRef/rest-api-doc/blob/master/rest_api.md)
* Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

Commands:
* Start server: `npm start`
* Run tests: `npm test`
* Deploy to GitHub Pages: `npm run deploy`

To-do:

1. Write tests
2. Prevent categories `all` and `cannot classify`
3. Display entered categories while training
* Auto-complete entered categories while training
* Allow multiple pages of training sample
* Display multiple pages of classified results
* Undo action for training

Ideas Parking Lot:
* Allow re-training classifier after view classified results
* Save trained classifier for each user - i.e. hooking up to back-end with user profiles
* Add abstract to training data
