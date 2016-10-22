import React, { PropTypes } from 'react'
import AddWord from './AddWord'

const renderTitle = (title, onClick, deleteList) => (
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <h1 onClick={onClick}>
      {title}
    </h1>
    <button onClick={deleteList}>Delete List</button>
  </div>
);

const ListHeader = ({ title, listId, editing, editTitle, updateTitle, displayAddWordForm, displayingWordForm, deleteList }) => {
  let input;

  const updateList = () => {
    editTitle(false);
    if (!input.value.trim()) return;
    updateTitle(input.value);
  };

  const cancelEdit = () => editTitle(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    updateList()
  };

  const onTitleBlur = () => {
    if (editing) {
      updateList()
    }
  };

  const onTitleKeyUp = (event) => {
    if (event.key == 'Escape') { cancelEdit() }
  };

  const renderEditingTitle = (title) => {
    return (
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          autoFocus
          ref={node => { input = node; }}
          defaultValue={title}
          onBlur={onTitleBlur}
          onKeyUp={onTitleKeyUp}
        />
      </form>
    )
  };
  return (

    <div>
      { editing ? renderEditingTitle(title) : renderTitle(title, editTitle.bind(null, true), deleteList) }
      <AddWord listId={listId} displayAddWordForm={displayAddWordForm} displayingWordForm={displayingWordForm} />
    </div>
  )
};

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  editTitle: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired,
  displayAddWordForm: PropTypes.func.isRequired,
  displayingWordForm: PropTypes.bool.isRequired,
  deleteList: PropTypes.func.isRequired
};

export default ListHeader