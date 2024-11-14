<template>
  <div>
    <canvas id="agile-maturity-score-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "AgileMaturityScoreChart",
  mounted() {
    new Chart(document.getElementById("agile-maturity-score-chart"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Actual",
            data: [72, 73, 74, 75, null, null],
            fill: false,
            borderColor: "rgba(102, 102, 255, 1)", // Light purple line
            backgroundColor: "rgba(102, 102, 255, 1)", // Point color
            pointBorderColor: "rgba(102, 102, 255, 1)",
            pointBackgroundColor: "#fff",
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.2, // Slight curve for smoothness
            borderWidth: 1,
          },
          {
            label: "Predicted",
            data: [null, null, null, 75, 76, 77],
            fill: false,
            borderColor: "rgba(76, 175, 80, 1)", // Green line
            backgroundColor: "rgba(76, 175, 80, 1)", // Point color
            borderDash: [5, 5], // Dashed line
            pointBorderColor: "rgba(76, 175, 80, 1)",
            pointBackgroundColor: "#fff",
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.2,
            borderWidth: 1,
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
            text: "Agile Maturity Score Prediction",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 25,
            },
            title: {
              display: true,
              text: "Score",
            },
          },
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
        },
        elements: {
          line: {
            tension: 0.2, // Light curve
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
