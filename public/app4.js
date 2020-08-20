// 4. Top 10 Economical Bowlers in 2015

function fetchAndVisualizeData() {  
  fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeetop10EconomicalBowlers2015(data.top10EconomicalBowlers2015);
  return;
}

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