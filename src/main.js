import React    from 'react'
import ReactDOM from 'react-dom'
import NBAStore from './stores/nba-store'

const Main = React.createClass({
  componentWillMount: function() {
    NBAStore.getCurrentTeams()
  },

  render: function() {
    return (
      <div>Hello World</div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'))
