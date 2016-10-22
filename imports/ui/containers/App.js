import { Meteor } from 'meteor/meteor'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import {Grid, Row, Col} from 'meteor/jimmiebtlr:react-flexbox-grid'

import Header from '../components/Header'
import SideNav from '../components/SideNav'
import ListLists from '../components/ListLists'

import { Lists } from '../../api/lists/lists'

let App = ({ loading, lists, children }) => (
  <div>
    <Header />
    <Grid>
      <Row>
        <Col md={2}>
          <SideNav />
        </Col>
        <Col md={4}>
          <ListLists loading={loading} lists={lists}/>
        </Col>
        <Col md={6}>
          { children }
        </Col>
      </Row>
    </Grid>
  </div>
);

App = createContainer(() => {
  const listsHandle = Meteor.subscribe('lists');
  return {
    lists: Lists.find({}).fetch() || [],
    loading: !listsHandle.ready()
  }
}, App);

export default App;

