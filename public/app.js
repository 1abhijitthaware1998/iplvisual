function fetchAndVisualizeData() {  
  fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByEachTeamAllYear(data.matchWinEachTeamAllYear);
  visualizeextraRunsConcededByEachTeam2016(data.extaRunsByEachTeamIn2016);
  visualizeetop10EconomicalBowlers2015(data.top10EconomicalBowlers2015);
  visualizeJust(data.just);
  return;
}


// 1. Matches Played Per Year"

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Matches Played Per Year",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Matches Played",
        data: seriesData
      }
    ]
  });
}


// 2. Matches Won By Each Team All Year

function visualizeMatchesWonByEachTeamAllYear(matchWinEachTeamAllYear) {
  const seriesData = [];
  for (let team in matchWinEachTeamAllYear) {
    seriesData.push([team, matchWinEachTeamAllYear[team]]);
  }

  Highcharts.chart("matches-won-by-each-team-all-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "2. Matches Won By Each Team All Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}

// 3. Extra Runs Conceded By Each Team in Year 2016

function visualizeextraRunsConcededByEachTeam2016(extaRunsByEachTeamIn2016) {
  const seriesData = [];
  for (let runs in extaRunsByEachTeamIn2016) {
    seriesData.push([runs, extaRunsByEachTeamIn2016[runs]]);
  }

  Highcharts.chart("extra-run-conceded-by-each-team-in-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra Runs Conceded By Each Team in Year 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}

// 4. Top 10 Economical Bowlers in 2015

function visualizeetop10EconomicalBowlers2015(top10EconomicalBowlers2015) {
  const seriesData = [];
  for (let bowlers in top10EconomicalBowlers2015) {
    seriesData.push([bowlers, top10EconomicalBowlers2015[bowlers]]);
  }

  Highcharts.chart("top-10-economical-bowler-2015", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top 10 Economical Bowlers in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowlers",
        data: seriesData
      }
    ]
  }); 
}

// 5. Just

function visualizeJust(just){
  const seriesData = [1,2,3,4,5,6,7,8,9,10];

  Highcharts.chart("just-wins", {
    chart: {
      type: "column"
    },
    title: {
      text: "5. Just"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowlers",
        data: seriesData
      }
    ]
  }); 
}