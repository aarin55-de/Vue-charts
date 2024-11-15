<template>
  <div>
    <canvas id="monthly-commit-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "MonthlyCommitChart",
  mounted() {
    new Chart(document.getElementById("monthly-commit-chart"), {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Commits",
            data: [120, 150, 130, 160], // Sample data, replace with actual data
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
