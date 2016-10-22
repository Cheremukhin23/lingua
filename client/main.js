import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from '../imports/ui/components/Root'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../imports/startup/client/store/configureStore'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

Meteor.startup(() => (
  render(<Root store={store} history={history} />, document.getElementById('app'))
));