<template>
  <div>
    <canvas id="daily-commit-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "DailyCommitChart",
  mounted() {
    new Chart(document.getElementById("daily-commit-chart"), {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Commits",
            data: [14, 21, 15, 27, 18, 6, 3], // Sample data, replace with actual data
            backgroundColor: "#4e73df",
          },
        ],
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
              text: "Commits",
            },
          },
        },
      },
    });
  },
};
</script>
