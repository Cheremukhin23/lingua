import { Meteor } from 'meteor/meteor'
import { browserHistory } from 'react-router'

export default () => () => (
  Meteor.call(
    'addList',
    {},
    (err, response) => {
      if (err) browserHistory.push('/');
      else browserHistory.push(`/lists/${response}`)
    }
  )
)
