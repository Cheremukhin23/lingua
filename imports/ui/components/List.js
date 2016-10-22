import React, { PropTypes } from 'react'

const styles = {
  main: {
    height: 150,
    border: '1px solid black',
    padding: '5px 5px 5px 5px',
    margin: '10px'
  },
  date: {
    color: 'blue'
  },
  selectedBorder: {
    border: '2px solid #0645AD'
  }
};

const List = ({ list, onClick, selected }) => {
  const showWords = (words = []) => words.map(word => word.text || word).join(', ');

  const showDate = (date) => {
    if (typeof(date) == 'number') date = new Date(date);
    return date.toLocaleDateString()
  };

  const border = selected ? styles.selectedBorder : null;

  return (
    <div style={{...styles.main, ...border}} onClick={() => onClick(list._id)}>
      <p>{list.name}</p>
      <p><span style={styles.date}>{showDate(list.createdAt)}</span> {showWords(list.words)}</p>
    </div>
 )
};

List.propTypes = {
  list: PropTypes.object.isRequired
};

export default List