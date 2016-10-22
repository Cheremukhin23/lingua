import { Meteor } from 'meteor/meteor'

// TODO: add nice alert messages

export default (listId, originText, text, translation, description) => () => (
  Meteor.call(
    'updateWord',
    { listId, originText, text, translation, description },
    (err) => {
      if (err) alert(err.message);
    }
  )
)
