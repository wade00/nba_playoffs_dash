import React    from 'react'
import NBAStore from '../stores/nba-store.js'

export default class Series extends React.Component {
  constructor(props) {
    super(props)

    const { series } = props
    this.state = { isReady: false }

    NBAStore.getTeamRosters(series)
      .then((response) =>
        this.setState({ round: response[0].d, bracket: response[0].co, isReady: true }))
  }

  render() {
    const { series, isReady } = this.state

    return (
      <div>
        { isReady ?
          <div>
            <p>{series.tc1} {series.tn1} vs. {series.tc2} {series.tn2}</p>
            <p>{series.seri}</p>
          </div>
        :
          null
        }
      </div>
    )
  }
}
