import { Meteor } from 'meteor/meteor'
import { Lists } from './lists'

Meteor.methods({
  addList() {
    return Lists.insert({name: 'Untitled', createdAt: new Date})
  },

  addWord({ listId, text, translation, description }) {
    return Lists.update({ _id: listId }, { $push: { words: { text, translation, description } } })
  },

  updateWord({ listId, originText, text, translation, description }) {
    return Lists.update({ _id: listId, 'words.text': originText }, { $set: { 'words.$': { text, translation, description }}})
  },

  updateListTitle({ id, name }) {
    return Lists.update({ _id: id }, { $set: { name: name } })
  },

  deleteList({ id: _id }) {
    return Lists.remove({ _id })
  },

  deleteWord({ listId, text }) {
    return Lists.update({ _id: listId }, { $pull: { words: { text } } })
  }
});