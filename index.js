const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeamAllYear = require("./ipl/matchesWonByEachTeamAllYear");
const extraRunsConcededByEachTeam2016 = require("./ipl/extraRunsConcededByEachTeam2016");
const top10EconomicalBowlersIn2015 = require("./ipl/top10EconomicalBowlers2015");
const just = require("./ipl/just"); 
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH  = "./public/data.json";

function main(){
csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deleiveries => {
        let matchesPlayed = matchesPlayedPerYear(matches);
        //console.log(matchesPlayed)
        let winEachTeamAllYear = matchesWonByEachTeamAllYear(matches);
        //console.log(winEachTeamAllYear)
        let extraRuns2016 = extraRunsConcededByEachTeam2016(matches,deleiveries);
        //console.log(extraRuns2016)
        let eco10Bowlers2015 = top10EconomicalBowlersIn2015(matches,deleiveries);
        //console.log(winEachTeamAllYear)
        let justtp = just(matches,deleiveries);
      saveData(matchesPlayed,winEachTeamAllYear,extraRuns2016,eco10Bowlers2015,justtp);
      //saveData(matchesPlayed,winEachTeamAllYear,extraRuns2016)
    });
  });
}

function saveData(result1,result2,result3,result4,result5) {
    const jsonData = {
      matchesPlayedPerYear        : result1,
      matchWinEachTeamAllYear     : result2,
      extaRunsByEachTeamIn2016    : result3,
      top10EconomicalBowlers2015  : result4,
      just                        : result5
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
}

main()