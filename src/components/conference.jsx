import React  from 'react'
import Series from './series.jsx'

const Conference = ({ conference }) =>
  <div>
    <h2>{conference.val}</h2>
    { conference.ser.map((series, idx) => <Series key={idx} series={series} />)}
  </div>

export default Conference
