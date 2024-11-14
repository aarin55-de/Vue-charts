<template>
  <div>
    <canvas id="business-value-forecast-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "BusinessValueForecastChart",
  mounted() {
    new Chart(document.getElementById("business-value-forecast-chart"), {
      type: "line",
      data: {
        labels: [
          "Sprint 1",
          "Sprint 2",
          "Sprint 3",
          "Sprint 4",
          "Sprint 5",
          "Sprint 6",
          "Sprint 7",
        ],
        datasets: [
          {
            label: "Actual Value",
            data: [100, 150, 200, 250, 220, null, null],
            fill: true,
            borderColor: "rgba(102, 102, 255, 0.8)", // Light purple line
            backgroundColor: "rgba(102, 102, 255, 0.3)", // Light purple fill
            pointBorderColor: "rgba(102, 102, 255, 1)",
            pointBackgroundColor: "rgba(102, 102, 255, 1)",
            tension: 0.4,
          },
          {
            label: "Predicted Value",
            data: [null, null, 200, 300, 350, 300, 250],
            fill: true,
            borderColor: "rgba(76, 175, 80, 0.8)", // Green line
            backgroundColor: "rgba(76, 175, 80, 0.3)", // Green fill
            pointBorderColor: "rgba(76, 175, 80, 1)",
            pointBackgroundColor: "rgba(76, 175, 80, 1)",
            tension: 0.4,
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
            text: "Business Value Delivery Forecast",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 600,
            title: {
              display: true,
              text: "Business Value",
            },
          },
          x: {
            title: {
              display: true,
              text: "Sprint",
            },
          },
        },
        elements: {
          line: {
            tension: 0.4, // Smoother lines
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
