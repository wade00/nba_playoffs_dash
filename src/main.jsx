import React      from 'react'
import ReactDOM   from 'react-dom'
import NBAStore   from './js/stores/nba-store.js'
import Conference from './js/components/conference.jsx'
import StatLeader from './js/components/stat-leader.jsx'

const Main = React.createClass({
  componentWillMount: function() {
    this.state = { isReady: false }
    const statCats = [ "Points Per Game", "Rebounds Per Game", "Assists Per Game", "Steals Per Game", "Field Goal %", "Free Throw %", "Three Point FG%", "Bocks Per Game"]

    const setStatCategories = (stats) => {
      statCats.forEach((cat, idx) => stats[idx]['name'] = cat)
      this.setState({ statLeaders: stats, isReady: true })
    }

    NBAStore.getStatLeaders()
      .then((response) => setStatCategories(response))

    NBAStore.getPlayoffBracket()
      .then((response) =>
        this.setState({ round: response[0].d, bracket: response[0].co }))
  },

  componentDidMount: function() {
    window.addEventListener("keydown", (key) => {
      if (key.keyCode === 40) {
        const scrollPoint = window.scrollY + (window.innerHeight - 40)
        window.scrollTo(0, scrollPoint)
      } else if (key.keyCode === 38) {
        const scrollPoint = window.scrollY - (window.innerHeight - 40)
        window.scrollTo(0, scrollPoint)
      }
    })
  },

  render: function() {
    const { round, bracket, statLeaders, isReady } = this.state

    const mainStyles = {
      margin: '-10px',
      padding: '10px',
      fontFamily: 'Helvetica',
      textAlign: 'center',
      backgroundColor: '#F7F7F7'
    }

    const roundHeader = {
      position: 'fixed',
      top: '0px',
      width: '100vw'
    }

    return (
      <div style={mainStyles}>
        { isReady ?
          <div>
            <div style={roundHeader}>
              <h2>{round}</h2>
              <h3>League Stat Leaders</h3>
            </div>
            {
              statLeaders.map((stat, idx) =>
                <StatLeader key={idx} statName={stat.name} leader={stat.rowSet[0]} />)
            }
          </div>
        :
          null
        }
      </div>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('app'))
