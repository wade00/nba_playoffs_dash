import React  from 'react'
import Series from './series.jsx'

const Conference = ({ conference }) =>
  <div>
    <h4>{conference.val}</h4>
    { conference.ser.map((series, idx) => <Series key={idx} series={series} />)}
  </div>

export default Conference
