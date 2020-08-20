// 5. Just
function fetchAndVisualizeData() {  
  fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeJust(data.just);
  return;
}

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