import React      from 'react'
import ReactDOM   from 'react-dom'
import NBAStore   from './stores/nba-store.js'
import Conference from './components/conference.jsx'

const Main = React.createClass({
  componentWillMount: function() {
    this.state = { isReady: false }

    NBAStore.getPlayoffBracket()
      .then((response) =>
        this.setState({ round: response[0].d, bracket: response[0].co, isReady: true }))
  },

  render: function() {
    const { round, bracket, isReady } = this.state

    return (
      <div>
        { isReady ?
          <div>
            <h2>{round}</h2>
            <div>
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
