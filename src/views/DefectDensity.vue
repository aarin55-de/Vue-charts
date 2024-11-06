<template>
    <div class="defect-density-page">
      <h1 class="page-title">Defect Density</h1>
  
      <!-- Top Cards -->
      <div class="top-cards">
        <div class="card">
          <p class="card-title">Overall Defect Density:</p>
          <p class="card-value">0.03 defects/LOC</p>
        </div>
        <div class="card">
          <p class="card-title">Defect Discovery Rate:</p>
          <p class="card-value">5 defects/day (Last 7 days average)</p>
        </div>
      </div>
  
      <!-- Tabs -->
      <div class="tabs">
        <button class="tab active">Trend Analysis</button>
        <button class="tab">By Module</button>
        <button class="tab">By Severity</button>
      </div>
  
      <!-- Chart Section -->
      <div class="chart">
        <h3>Defect Density Trend</h3>
        <DefectDensityChart :chartData="chartData" />
      </div>
  
      <!-- Key Insights Section -->
      <div class="key-insights">
        <h3>Key Insights</h3>
        <ul>
          <li>Defect density has decreased by 20% over the last 5 sprints</li>
          <li>Module B has the highest defect density and may require additional attention</li>
          <li>70% of defects are Medium or Low severity, indicating generally stable code</li>
          <li>Current defect density is slightly above industry benchmark</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import DefectDensityChart from '../charts/DefectDensityChart.vue';
  
  export default {
    name: "DefectDensity",
    components: {
      DefectDensityChart,
    },
    data() {
      return {
        chartData: {
          labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"],
          datasets: [
            {
              label: "density",
              data: [0.045, 0.04, 0.055, 0.05, 0.03],
              borderColor: "#6a5acd",
              backgroundColor: "rgba(106, 90, 205, 0.2)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Main page styling */
  .defect-density-page {
    width: 100%;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .page-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .top-cards {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  .card {
    flex: 1;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  .card-title {
    font-weight: bold;
    font-size: 16px;
  }
  .card-value {
    font-size: 14px;
    margin-top: 5px;
  }
  .tabs {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }
  .tab {
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
  }
  .tab.active {
    background-color: #e0e0e0;
    font-weight: bold;
  }
  
  /* Chart section styling */
  .chart {
    max-width: 50%;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #ffffff;
  }
  .chart h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  /* Key insights section styling */
  .key-insights {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  .key-insights h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .key-insights ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 14px;
  }
  .key-insights li {
    margin-bottom: 5px;
  }
  </style>
  