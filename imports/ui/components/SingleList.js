import React, { PropTypes } from 'react'
import ListHeader from './ListHeader'
import WordsContainer from '../containers/WordsContainer'

const SingleList = ({
  list,
  words,
  loading,
  editingTitle,
  editListTitle,
  updateListTitle,
  displayAddWordForm,
  displayingWordForm,
  deleteList
}) => {
  if (loading) return <p>Loading</p>;

  // TODO: render NoPageFound if !list return page not found
  if (!list) return <div>It it not that list you are looking for...</div>;

  const listId = list._id;
  return (
    <div style={{border: '1px dotted magenta'}}>
      <ListHeader
        title={list.name}
        listId={listId}
        editing={editingTitle}
        displayingWordForm={displayingWordForm}
        editTitle={editListTitle.bind(null, listId)}
        updateTitle={updateListTitle.bind(null, listId)}
        displayAddWordForm={displayAddWordForm.bind(null, listId)}
        deleteList={deleteList.bind(null, listId)}
      />
      <WordsContainer words={words} listId={listId}/>
    </div>
  )
};

SingleList.propTypes = {
  list: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  words: PropTypes.array.isRequired,
  editingTitle: PropTypes.bool.isRequired,
  editListTitle: PropTypes.func.isRequired,
  updateListTitle: PropTypes.func.isRequired,
  displayAddWordForm: PropTypes.func.isRequired,
  displayingWordForm: PropTypes.bool.isRequired,
  deleteList: PropTypes.func.isRequired
};

export default SingleList