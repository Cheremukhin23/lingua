const list = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_LIST_TITLE':
      return {
        ...state,
        editingTitle: action.editingTitle
      };
    case 'DISPLAY_ADD_WORD_FORM':
      return {
        ...state,
        displayingWordForm: action.displayingWordForm
      };
    case 'HANDLE_SINGLE_WORD_DIALOG':
      return {
        ...state,
        singleWordDialog: { open: action.open, word: action.word }
      };
    default:
      return state
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_LIST_TITLE':
    case 'DISPLAY_ADD_WORD_FORM':
    case 'HANDLE_SINGLE_WORD_DIALOG':
      return {
        ...state,
        [action.id]: list(state[action.id], action)
      };
    default:
      return state
  }
}