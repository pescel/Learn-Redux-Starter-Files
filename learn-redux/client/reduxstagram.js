import React from 'react';
import {render} from 'react-dom';

//import css stuff
import css from './styles/style.styl';

//import the components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

import Raven from 'raven-js';
import {sentry_url, logExeption} from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'something',
    userLevel: 'editor'
  }
}).install();

// logExeption(new Error('download failed!'))
// allows user to report problem themselves with popup inputs
// Raven.showReportDialog();

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId"component={Single}></Route>
    </Route>
  </Router>
  </Provider>
)

render(router, document.getElementById('root'));
