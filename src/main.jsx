import React      from 'react'
import ReactDOM   from 'react-dom'
import NBAStore   from './js/stores/nba-store.js'
import Conference from './js/components/conference.jsx'
import StatLeader from './js/components/stat-leader.jsx'

const Main = React.createClass({
  componentWillMount: function() {
    this.state = { isReady: false }

    const setStatCategories = (stats) => {
      ["PPG", "RPG", "APG", "SPG", "FG%", "FT%", "3FG%", "BPG"].forEach((cat, idx) => stats[idx]['name'] = cat)
      this.setState({ statLeaders: stats, isReady: true })
    }

    NBAStore.getStatLeaders()
      .then((response) => setStatCategories(response))

    NBAStore.getPlayoffBracket()
      .then((response) =>
        this.setState({ round: response[0].d, bracket: response[0].co }))
  },

  render: function() {
    const { round, bracket, statLeaders, isReady } = this.state

    return (
      <div>
        { isReady ?
          <div>
            <h2>{round}</h2>
            <h3>League Stat Leaders</h3>
            {
              statLeaders.map((stat, idx) =>
                <StatLeader key={idx} statName={stat.name} leader={stat.rowSet[0]} />)
            }
            <div>
              <h3>Conferences</h3>
              { bracket.map((conference, idx) => <Conference key={idx} conference={conference} />) }
            </div>
          </div>
        :
          null
        }
      </div>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('app'))
