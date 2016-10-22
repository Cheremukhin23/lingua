import { Meteor } from 'meteor/meteor'

// TODO: add nice alert messages

export default (listId, text) => () => (
  Meteor.call(
    'deleteWord',
    { listId, text },
    (err) => {
      if (err) alert(err.message);
    }
  )
)
