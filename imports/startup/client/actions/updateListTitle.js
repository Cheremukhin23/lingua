import { Meteor } from 'meteor/meteor'

// TODO: add nice alert messages

export default (id, name) => () => (
  Meteor.call(
    'updateListTitle',
    {id, name},
    (err) => {
      if (err) alert(err.message);
    }
  )
)
