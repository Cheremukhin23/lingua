import React from 'react'
import { connect } from 'react-redux'
import addList from '../../startup/client/actions/addList'

const AddList = ({ dispatch }) => (
    <div>
      <a onClick={() => dispatch(addList())}>
        New List
      </a>
    </div>
);

export default connect()(AddList);
