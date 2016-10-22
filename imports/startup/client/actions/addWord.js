import { Meteor } from 'meteor/meteor'

// TODO: add nice alert messages

export default (listId, text, translation, description) => () => (
  Meteor.call(
    'addWord',
    { listId, text, translation, description },
    (err) => {
      if (err) alert(err.message);
    }
  )
)
