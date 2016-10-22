import { connect } from 'react-redux'
import Words from '../components/Words'
import handleSingleWordDialog from '../../startup/client/actions/handleSingleWordDialog'
import { updateWord, deleteWord } from '../../startup/client/actions'

const mapStateToProps = (state, { listId }) => {
  const id = listId;

  return {
    singleWordDialog: state.lists[id] && state.lists[id].singleWordDialog || { open: false, word: {} },
  }
};

const mapDispatchToProps = (dispatch, { listId }) => (
{
  handleSingleWordDialog: (word, open) => dispatch(handleSingleWordDialog(listId, word, open)),
  updateWord: (originalText, text, translation, description) => dispatch(updateWord(listId, originalText, text, translation, description)),
  deleteWord: (text) => dispatch(deleteWord(listId, text))
}
);

export default connect(mapStateToProps, mapDispatchToProps)(Words);
