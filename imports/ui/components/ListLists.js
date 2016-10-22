import React, { PropTypes } from 'react'
import List from './List'
import { GridList } from 'material-ui/GridList'
import { browserHistory } from 'react-router'

const windowHeight = window.innerHeight; // TODO: make it dynamic as store property and redux action on resize

const styles = {
  root: {
    display: 'flex',
    height: 800, // TODO: make this not hardcoded
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    border: '1px solid red',
    overflowY: 'auto',
  }
};

const ListLists = ({ loading, lists }) => {
  if (loading) return <p>Loading</p>;

  if (!lists.length) return <p>No lists here. Add new one using the button above</p>;

  const onItemClick = (listId) => browserHistory.push(`/lists/${listId}`);

  const selectedList = window.location.pathname; // TODO: make it as redux action

  let listLists = lists.map(list => {
    const selected = selectedList.includes(list._id);
    return(
      <List list={list} key={list._id} onClick={onItemClick} selected={selected}/> //TODO: Add editing functionality
    )
  });

  //TODO: Add visibility filter functionality to change all lists / mine lists etc.
  return (
    <div style={styles.root}>
      <h1>All Lists</h1>
      <GridList cellHeight={180}>
        {listLists}
      </GridList>
    </div>
  )
};

ListLists.propTypes = {
  loading: PropTypes.bool.isRequired,
  lists: PropTypes.array
};

export default ListLists