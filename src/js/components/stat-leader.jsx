import React  from 'react'

const StatLeader = ({ statName, leader }) =>
  <div>
    <h4>{statName}</h4>
    <p>{leader[2]}</p>
    <p>{leader[8]}</p>
  </div>

export default StatLeader
