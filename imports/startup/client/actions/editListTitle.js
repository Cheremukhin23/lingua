export default (listId, editingTitle) => (
  {
    type: 'EDIT_LIST_TITLE',
    id: listId,
    editingTitle
  }
)
