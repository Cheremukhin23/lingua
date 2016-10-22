import React from 'react'
import { Route } from 'react-router'
import App from '../../ui/containers/App'
import SingleListContainer from '../../ui/containers/SingleListContainer'

export default
  <Route path="/" component={App}>
    <Route path="lists/:id" component={SingleListContainer}/>
  </Route>