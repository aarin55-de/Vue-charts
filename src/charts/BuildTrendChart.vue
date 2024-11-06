<template>
    <div>
      <canvas id="build-trend-chart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js/auto';
  
  export default {
    name: "BuildTrendChart",
    mounted() {
      new Chart(document.getElementById("build-trend-chart"), {
        type: 'line',
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          datasets: [
            {
              label: "Build Duration",
              data: [24, 18, 28, 20, 26],
              borderColor: "#6a5acd",
              backgroundColor: "rgba(106, 90, 205, 0.2)",
              tension: 0.4,
              fill: true,
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Minutes"
              }
            }
          }
        }
      });
    }
  };
  </script>
  