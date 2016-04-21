import React  from 'react'

const statContainer = {
  height: '80vh',
  paddingTop: '20vh',
  width: '300vw'
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

const playerContainer = {
  display: 'inline-block',
  marginRight: '-2px',
  width: '100vw'
}

const StatLeader = ({ statName, leaders }) =>
  <div style={statContainer}>
    {
      leaders.map((leader, idx) => {
        return <div key={idx} style={playerContainer}>
                 <h4 style={statHeader}>{statName}</h4>
                 <p style={leaderName}>({idx + 1}) {leader[2]}</p>
                 <p style={leaderValue}>{leader[8]}</p>
               </div>
      })
    }
  </div>

export default StatLeader
