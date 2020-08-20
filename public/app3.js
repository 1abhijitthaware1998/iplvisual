// 3. Extra Runs Conceded By Each Team in Year 2016

function fetchAndVisualizeData() {  
  fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeextraRunsConcededByEachTeam2016(data.extaRunsByEachTeamIn2016);
  return;
}

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