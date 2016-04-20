const nbaEndpoints = {
  bracket: 'http://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2015/scores/00_playoff_bracket.json',
  currentPlayers: 'http://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=1&LeagueID=00&Season=2015-16',
  playerGameLogs: 'http://stats.nba.com/stats/playergamelog?LeagueID=00&PlayerID=201939&Season=2015-16&SeasonType=Playoffs'
}

const getPlayoffBracket = () => {
  const request = new Request(nbaEndpoints.bracket, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' }
  })

  return fetch(request)
    .then((response) => response.json())
      .then((response) => response.pb.r)
}

const getTeamRosters = (series) => {
  const teamIds = new Array(series.tid1, series.tid2)
  let players   = []

  const request = new Request(`${nbaEndpoints.currentPlayers}&TEAM_ID=${teamIds[0]}`, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' }
  })

  return fetch(request)
    .then((response) => response.json())
      .then((response) => console.log(response))
}

module.exports = {
  getPlayoffBracket: getPlayoffBracket,
  getTeamRosters: getTeamRosters
}
