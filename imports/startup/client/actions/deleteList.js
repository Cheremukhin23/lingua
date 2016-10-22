import { Meteor } from 'meteor/meteor'
import { browserHistory } from 'react-router'

// TODO: add nice alert messages

export default (id) => () => (
  Meteor.call(
    'deleteList',
    { id },
    (err) => {
      if (err) alert(err.message);
      else browserHistory.push('/')
    }
  )
)
