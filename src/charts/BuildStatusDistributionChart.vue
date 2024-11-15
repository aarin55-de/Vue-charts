<template>
  <div>
    <canvas id="build-status-distribution-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "BuildStatusDistributionChart",
  mounted() {
    new Chart(document.getElementById("build-status-distribution-chart"), {
      type: "bar",
      data: {
        labels: ["Bob", "Sam", "Adam"],
        datasets: [
          {
            label: "Code Quality",
            data: [8, 7, 6], // Sample data, replace with actual data
            backgroundColor: "#6A5ACD",
          },
          {
            label: "Review Impact",
            data: [9, 10, 9], // Sample data, replace with actual data
            backgroundColor: "#98FB98",
          },
          {
            label: "Leadership",
            data: [5, 4, 3], // Sample data, replace with actual data
            backgroundColor: "#FFD700",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Scores",
            },
          },
        },
      },
    });
  },
};
</script>
