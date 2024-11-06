<template>
    <div class="code-insight-page">
      <h1 class="page-title">Code Insights</h1>
  
      <!-- Status Bar with Tabs -->
      <div class="status-bar">
        <button class="tab">Code Quality</button>
        <button class="tab">Repository Activities</button>
        <button class="tab active">Pipeline Health</button>
        <button class="tab">Developer Metrics</button>
      </div>
  
      <!-- Charts Section -->
      <div class="charts-row">
        <!-- Build Status Distribution Chart -->
        <div class="chart-container">
          <h3>Build Status Distribution</h3>
          <BuildStatusChart />
        </div>
  
        <!-- Daily Build Trend Chart -->
        <div class="chart-container">
          <h3>Daily Build Trend</h3>
          <BuildTrendChart />
        </div>
      </div>
      <!-- Section for cards -->
      <div class="insight-cards-container">
            <InsightCard
                v-for="(card, index) in insightCards"
                :key="index"
                :title="card.title"
                :score="card.score"
                :percentage="card.percentage"
            />
        </div>
        <!-- Team Table -->
    <TeamTable />
    </div>
  </template>
  
  <script>
  import BuildStatusChart from '../charts/BuildStatusChart.vue';
  import BuildTrendChart from '../charts/BuildTrendChart.vue';
  import InsightCard from '../charts/InsightCard.vue';
  import TeamTable from '../tables/TeamTable.vue';
  
  export default {
    name: "CodeInsight",
    components: {
      BuildStatusChart,
      BuildTrendChart,
      InsightCard,
      TeamTable,
    },
    data() {
    return {
      insightCards: [
        { title: 'Pipeline Success Rate Percentage', score: 82, percentage: 2.5 },
        { title: 'Average Pipeline Duration', score: 85, percentage: 1.8 },
        { title: 'Environment Availability', score: 80, percentage: -2.1 },
        { title: 'Infrastructure Resource Utilization', score: 94, percentage: 0.5 },
        { title: 'Deployment Frequency', score: 72, percentage: -5 },
        { title: 'Mean Time to Recovery', score: 70, percentage: -1.5 },
        { title: 'Test Infrastructure Performance', score: 88, percentage: 1.2 },
      ],
    };
  },
  };
  </script>
  
  <style scoped>
  .insight-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em;
  margin-top: 20px;
  justify-content: space-evenly;
}

  .code-insight-page {
    width: 100%;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .page-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .status-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
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
  
  /* Charts Section */
  .charts-row {
    display: flex;
    gap: 20px;
  }
  .chart-container {
    flex: 1;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #ffffff;
  }
  .chart-container h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  </style>
  