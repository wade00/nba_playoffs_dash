const nbaEndpoints = {
  bracket: 'http://data.nba.com/data/10s/v2015/json/mobile_teams/nba/2015/scores/00_playoff_bracket.json',
  teamRosters: 'http://stats.nba.com/stats/commonteamroster?&Season=2015-16',
  playerGameLogs: 'http://stats.nba.com/stats/playergamelog?LeagueID=00&PlayerID=201939&Season=2015-16&SeasonType=Playoffs',
  statCategoryLeaders: 'http://stats.nba.com/stats/homepagev2?GameScope=Season&LeagueID=00&PlayerOrTeam=Player&PlayerScope=All+Players&Season=2015-16&SeasonType=Playoffs&StatType=Traditional'
}

const getPlayoffBracket = () => {
  const request = new Request(nbaEndpoints.bracket, {
    method: 'GET',
    mode: 'cors',
    'Content-Type': 'application/json'
  })

  return fetch(request)
    .then((response) => response.json())
      .then((response) => response.pb.r)
}

const getPlayerStats = (playerIds) => {
  // figure out how to get individual player stats and compare them to each other
  // let playerStats = []
  // const topPlayer = playerIds.reduce((prev, current) => {
  //   return previous.then((previousValue) => console.log(previousValue))
  // }, Promise.resolve("hi"))
}

const getTeamRosters = (series) => {
  const teamIds = new Array(series.tid1, series.tid2)

  const pluckPlayerIds = (players) =>
    players.reduce((a,b) => a.concat(b)).map((player) => player[12])

  const fetchRoster = (teamId) => {
    const request = new Request(`${nbaEndpoints.teamRosters}&TeamID=${teamId}`, {
      method: 'GET',
      mode: 'cors',
      'Content-Type': 'application/json',
    })

    return fetch(request)
      .then((response) => response.json())
        .then((response) => response.resultSets[0].rowSet)
  }

  Promise.all([fetchRoster(teamIds[0]), fetchRoster(teamIds[1])])
    .then((response) => getPlayerStats(pluckPlayerIds(response)))
}

const getStatLeaders = () => {
  const request = new Request(nbaEndpoints.statCategoryLeaders, {
    method: 'GET',
    mode: 'cors',
    'Content-Type': 'application/json'
  })

  return fetch(request)
    .then((response) => response.json())
      .then((response) => response.resultSets)
}

module.exports = {
  getPlayoffBracket: getPlayoffBracket,
  getTeamRosters: getTeamRosters,
  getStatLeaders: getStatLeaders
}
