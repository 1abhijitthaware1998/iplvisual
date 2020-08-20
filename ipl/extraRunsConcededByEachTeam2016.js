function extraRunsConcededByEachTeam2016(matches, deliveries) {
  let result={}
  const match = (matches.filter(i=>i.season==2016)).map(i=>parseInt(i.id))
  const ball = deliveries.filter(i=> match.includes(parseInt(i['match_id'])))
  for(let i in ball)
  {
      const extras = ball[i]['extra_runs']
      const team = ball[i].bowling_team
      if(result[team])
      {
          result[team]+=parseInt(extras)
      }
      else
      {
          result[team]=parseInt(extras)
      }
  }
  //console.log(matches)
  return result
}
module.exports = extraRunsConcededByEachTeam2016;