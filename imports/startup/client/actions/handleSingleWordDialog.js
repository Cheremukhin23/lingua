export default (listId, word, open) => (
  {
    type: 'HANDLE_SINGLE_WORD_DIALOG',
    id: listId,
    word,
    open
  }
)
