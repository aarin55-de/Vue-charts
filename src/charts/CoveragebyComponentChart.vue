<template>
  <div>
    <canvas id="coverage-by-component-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "CoverageByComponentChart",
  mounted() {
    new Chart(document.getElementById("coverage-by-component-chart"), {
      type: "bar",
      data: {
        labels: ["Frontend", "Backend", "API", "Utils"],
        datasets: [
          {
            label: "Coverage",
            data: [80, 75, 85, 90],
            backgroundColor: "rgba(76, 175, 80, 0.8)", // Green bars
            borderColor: "rgba(76, 175, 80, 1)",
            borderWidth: 1,
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
