import React, { PropTypes } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  input: {
    border: 'none',
    background: 'transparent',
    outline: 'none'
  }
};

const SingleWordDialog = ({ word, open, handleClose, updateWord }) => {
  let text;
  let translation;
  let description;

  const onUpdate = () => {
    updateWord(text.value.trim(), translation.value.trim(), description.value.trim());
    handleClose();
  };

  const onInputKeyUp = (event) => {
    if (event.key == 'Enter') onUpdate();
  };

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={onUpdate}
    />,
  ];

  return (
    <Dialog
      title={<input style={styles.input} type='text' ref={node => text = node} defaultValue={word.text} onKeyUp={onInputKeyUp}/>}
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={handleClose}
    >
      <form>
        Translation: <input style={styles.input}
                            type="text"
                            ref={node => translation = node}
                            defaultValue={word.translation}
                            onKeyUp={onInputKeyUp}/>
        <br/>
        Description: <input style={styles.input}
                            type="text"
                            ref={node => description = node}
                            defaultValue={word.description}
                            onKeyUp={onInputKeyUp}/>
      </form>
    </Dialog>
  )
};

SingleWordDialog.propTypes = {
  word: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  updateWord: PropTypes.func.isRequired
};

export default SingleWordDialog