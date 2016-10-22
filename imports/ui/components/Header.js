import React from 'react'
import AddList from '../containers/AddList'

const styles = {
  display: 'flex',
  flexFlow: 'row, wrap',
  alignItems: 'center',
  justifyContent: 'space-between'
};

export default () => (
  <header style={styles}>
    <h1>Lingua</h1>
    <AddList />
  </header>
)