// 2. Matches Won By Each Team All Year

function fetchAndVisualizeData() {  
  fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesWonByEachTeamAllYear(data.matchWinEachTeamAllYear);
  return;
}

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