<template>
    <div>
      <canvas id="build-status-chart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js/auto';
  
  export default {
    name: "BuildStatusChart",
    mounted() {
      new Chart(document.getElementById("build-status-chart"), {
        type: 'bar',
        data: {
          labels: ["Feature", "Bugfix", "Hotfix", "Release"],
          datasets: [
            {
              label: "Minutes",
              data: [10, 8, 5, 12],
              backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
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
  