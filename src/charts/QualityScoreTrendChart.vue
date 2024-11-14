<template>
  <div>
    <canvas id="quality-score-trend-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "QualityScoreTrendChart",
  mounted() {
    new Chart(document.getElementById("quality-score-trend-chart"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Quality Score",
            data: [75, 78, 76, 77, 79],
            fill: false,
            borderColor: "rgba(0, 123, 255, 0.8)", // Blue line
            backgroundColor: "rgba(0, 123, 255, 0.8)", // Blue points
            pointBorderColor: "rgba(0, 123, 255, 1)",
            pointBackgroundColor: "rgba(0, 123, 255, 1)",
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "",
            align: "start",
            font: {
              size: 18,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
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
