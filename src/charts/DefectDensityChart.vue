<template>
    <div class="chart-container">
      <canvas ref="defectChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js';
  
  export default {
    name: "DefectDensityChart",
    props: {
      chartData: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      this.createChart();
    },
    methods: {
      createChart() {
        const ctx = this.$refs.defectChart.getContext("2d");
        new Chart(ctx, {
          type: 'line',
          data: this.chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Sprints",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Defect Density",
                },
                min: 0,
                max: 0.06,
              },
            },
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .chart-container {
    height: 300px;
  }
  </style>
  