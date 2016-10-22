import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import addWord from '../../startup/client/actions/addWord'

let AddWord = ({ dispatch, listId, displayAddWordForm, displayingWordForm }) => {
  let input;
  let translation;
  let description;

  const createWord = (event) => {
    event.preventDefault();
    if (!input.value.trim()) return;
    dispatch(addWord(listId, input.value, translation.value.trim(), description.value.trim()));
    input.value = '';
    translation.value = '';
    description.value = '';
  };

  const onButtonClick = (event, state) => {
    event.preventDefault();
    displayAddWordForm(state)
  };

  const renderButton = () => (
    <button onClick={(event) => onButtonClick(event, true)}>Add word</button>
  );

  const renderAddWordForm = () => (
    <div>
      <button onClick={(event) => onButtonClick(event, false)}>Close</button>
      <form onSubmit={createWord}>
        <input type="text" ref={node => input = node} placeholder="Type to add new word"/>
        <input type="text" ref={node => translation = node} placeholder="Type to add translation"/>
        <input type="text" ref={node => description = node} placeholder="Type to add description"/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );

  return (
    <div>
      { displayingWordForm ? renderAddWordForm() : renderButton() }
    </div>
  )
};

AddWord.propTypes = {
  listId: PropTypes.string.isRequired,
  displayAddWordForm: PropTypes.func.isRequired,
  displayingWordForm: PropTypes.bool.isRequired
};

export default connect()(AddWord)