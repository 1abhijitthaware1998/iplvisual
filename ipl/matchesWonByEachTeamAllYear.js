function matchesWonByEachTeamAllYear(matches) {
    const result = {};
    for (let match of matches) {
      const team=match.winner
      if (result[team]) {
        result[team] += 1;
      } 
      else {
        result[team] = 1;
      }
    }
  return result;
}
  
  module.exports = matchesWonByEachTeamAllYear;