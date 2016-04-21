import React  from 'react'
import Series from './series.jsx'

const confContainer = {
  display: 'inline-block',
  margin: '0px'
}

const confName = {
  margin: '0px 20px',
}

const Conference = ({ conference }) =>
  <div style={confContainer}>
    <h4 style={confName}>{conference.val}</h4>
    { conference.ser.map((series, idx) => <Series key={idx} series={series} />)}
  </div>

export default Conference
