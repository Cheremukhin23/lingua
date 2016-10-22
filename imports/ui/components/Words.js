import React, { PropTypes } from 'react'
import SingleWordDialog from './SingleWordDialog'

const styles = {
  lists: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

const Words = ({ words, handleSingleWordDialog, singleWordDialog, updateWord, deleteWord }) => {
  if (words.length == 0) return <p>No words here. Add them using the form above</p>;

  //TODO: Add editing functionality and delete as well, maybe privacy option
  //<Word word={word} key={index} />

  let Words = words.map((word, index) => (
    <li style={styles.lists} key={index}>
      <span onClick={() => handleSingleWordDialog(word, true)}>{word.text || word}</span>
      <span><button onClick={deleteWord.bind(null, word.text)}>Delete</button></span>
    </li>
  ));
  const { open, word } = singleWordDialog;
  return (
    <div>
      <ul style={{border: '1px solid orange'}}>
        {Words}
      </ul>
      <SingleWordDialog word={word}
                        open={open}
                        handleClose={handleSingleWordDialog.bind(null, word, false)}
                        updateWord={updateWord.bind(null, word.text)}
      />
    </div>
  )
};

Words.propTypes = {
  words: PropTypes.array.isRequired,
  handleSingleWordDialog: PropTypes.func.isRequired,
  singleWordDialog: PropTypes.object.isRequired,
  updateWord: PropTypes.func.isRequired,
  deleteWord: PropTypes.func.isRequired
};

export default Words