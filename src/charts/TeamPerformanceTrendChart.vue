<template>
  <div>
    <canvas id="team-performance-trend-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  name: "TeamPerformanceTrendChart",
  mounted() {
    new Chart(document.getElementById("team-performance-trend-chart"), {
      type: "line",
      data: {
        labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4"],
        datasets: [
          {
            label: "Velocity",
            data: [80, 82, 85, 88], // Sample data, replace with actual data
            backgroundColor: "#6A5ACD",
            borderColor: "#6A5ACD",
            fill: false,
            tension: 0.4,
          },
          {
            label: "Quality",
            data: [78, 80, 81, 83], // Sample data, replace with actual data
            backgroundColor: "#20B2AA",
            borderColor: "#20B2AA",
            fill: false,
            tension: 0.4,
          },
          {
            label: "Collaboration",
            data: [85, 87, 88, 90], // Sample data, replace with actual data
            backgroundColor: "#FFA500",
            borderColor: "#FFA500",
            fill: false,
            tension: 0.4,
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
              text: "Performance",
            },
          },
        },
      },
    });
  },
};
</script>
