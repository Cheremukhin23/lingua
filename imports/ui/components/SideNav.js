import React from 'react'
import { Link } from 'react-router'

export default () => (
  <nav style={{border: '1px solid black'}}>
    <ul>
      <li>
        <Link to="/">Lists</Link>
      </li>
      <li>
        <Link to="/quiz">Quiz</Link>
      </li>
    </ul>
  </nav>
)