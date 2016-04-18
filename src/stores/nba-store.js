const nbaEndpoints = {
  bracket: 'http://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2015/scores/00_playoff_bracket.json',
  currentPlayers: 'http://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=1&LeagueID=00&Season=2015-16',
  playerGameLogs: 'http://stats.nba.com/stats/playergamelog?LeagueID=00&PlayerID=201939&Season=2015-16&SeasonType=Playoffs'
}

const getCurrentTeams = () =>
  console.log('hi')

module.exports = {
  getCurrentTeams: getCurrentTeams
}
