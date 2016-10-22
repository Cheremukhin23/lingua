import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Lists } from '../../api/lists/lists'
import SingleList from '../components/SingleList'
import { connect } from 'react-redux'
import * as actions from '../../startup/client/actions'

const SingleListContainer = createContainer(({ id }) => {
  const listsHandle = Meteor.subscribe('singleList', id);
  const list = Lists.findOne(id);

  return {
    list,
    loading: !listsHandle.ready(),
    words: (list && list.words) || [],
  }
}, SingleList);

const mapStateToProps = (state, { params }) => {
  const id = params.id;

  return {
    editingTitle: state.lists[id] && state.lists[id].editingTitle || false,
    displayingWordForm: state.lists[id] && state.lists[id].displayingWordForm || false,
    id
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    editListTitle: (listId, editing) => dispatch(actions.editListTitle(listId, editing)),
    updateListTitle: (listId, name) => dispatch(actions.updateListTitle(listId, name)),
    displayAddWordForm: (listId, display) => dispatch(actions.displayAddWordForm(listId, display)),
    deleteList: (listId) => dispatch(actions.deleteList(listId))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SingleListContainer);