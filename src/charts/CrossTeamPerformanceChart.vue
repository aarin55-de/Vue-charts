<template>
  <div>
    <canvas id="cross-team-performance-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "CrossTeamPerformanceChart",
  mounted() {
    new Chart(document.getElementById("cross-team-performance-chart"), {
      type: "bar",
      data: {
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        datasets: [
          {
            label: "Velocity",
            data: [45, 35, 50, 40, 48],
            backgroundColor: "rgba(93, 106, 233, 0.8)", // Purple bars
            yAxisID: "y",
          },
          {
            label: "Quality Index",
            data: [0.85, 0.88, 0.9, 0.87, 0.89],
            type: "line",
            borderColor: "rgba(0, 204, 136, 1)", // Green line
            backgroundColor: "rgba(0, 204, 136, 0.1)",
            yAxisID: "y1",
            tension: 0.3,
          },
          {
            label: "Delivery Accuracy",
            data: [0.8, 0.82, 0.83, 0.81, 0.84],
            type: "line",
            borderColor: "rgba(255, 167, 38, 1)", // Orange line
            backgroundColor: "rgba(255, 167, 38, 0.1)",
            yAxisID: "y1",
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
          title: {
            display: true,
            text: "Cross-Team Performance Comparison",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Velocity",
            },
          },
          y1: {
            beginAtZero: true,
            position: "right",
            title: {
              display: true,
              text: "Quality Index & Delivery Accuracy",
            },
            min: 0,
            max: 1,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
