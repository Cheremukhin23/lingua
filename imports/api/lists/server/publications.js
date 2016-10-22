import { Meteor } from 'meteor/meteor'
import { Lists } from '../lists'

Meteor.publish(
  'lists',
  function () {
    return Lists.find()
  }
);

Meteor.publish(
  'singleList',
  function (id) {
    return Lists.find({ _id: id })
  }
);