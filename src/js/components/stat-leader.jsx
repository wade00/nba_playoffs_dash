import React  from 'react'

const statContainer = {
  height: '80vh',
  paddingTop: '20vh'
}

const statHeader = {
  fontSize: '40px',
  margin: '10px'
}

const leaderName = {
  color: '#20406F',
  fontSize: '60px',
  margin: '0px'
}

const leaderValue = {
  color: '#5A1F1A',
  fontSize: '200px',
  fontWeight: 'bold',
  margin: '0px'
}

const StatLeader = ({ statName, leader }) =>
  <div style={statContainer}>
    <h4 style={statHeader}>{statName}</h4>
    <p style={leaderName}>{leader[2]}</p>
    <p style={leaderValue}>{leader[8]}</p>
  </div>

export default StatLeader
