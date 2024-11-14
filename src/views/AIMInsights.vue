<template>
  <main id="aim-insight">
    <div class="aim-insight">
      <div class="main-content">
        <Navbar />
        <h2>AIM Insights</h2>
        <!--  1st Charts Section -->
        <div class="charts-row">
          <!-- Build Status Distribution Chart -->
          <div class="chart-container">
            <h3>Cross-Team Performance Comparison</h3>
            <CrossTeamPerformanceChart />
          </div>

          <!-- Daily Build Trend Chart -->
          <div class="chart-container">
            <h3>Business Value Delivery Forcast</h3>
            <BusinessValueChart />
          </div>
        </div>
        <!--  2nd Charts Section -->
        <div class="charts-row">
          <!-- Build Status Distribution Chart -->
          <div class="chart-container">
            <h3>Agile Maturity Score Prediction</h3>
            <AgileMaturityScoreChart />
          </div>

          <!-- Daily Build Trend Chart -->
          <div class="chart-container">
            <div class="recomandations">
              <h3>Recomandations</h3>
              <ul>
                <li>
                  Implement more frequent code reviews to improve technical
                  practices
                </li>
                <li>
                  Conduct team building exercises to further enhance team
                  dynamics
                </li>
                <li>
                  Focus on reducing lead time through process optimization
                </li>
                <li>
                  Increase stakeholder engagement to improve value delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import DashboardWidget from "../components/DashboardWidget.vue";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "vue-chartjs";
import { Line } from "vue-chartjs";
import { PolarArea } from "vue-chartjs";
import * as chartConfig from "../chartConfig";
import Navbar from "../components/Navbar.vue";
import CrossTeamPerformanceChart from "../charts/CrossTeamPerformanceChart.vue";
import BusinessValueChart from "../charts/BusinessValueChart.vue";
import AgileMaturityScoreChart from "../charts/AgileMaturityScoreChart.vue";

ChartJS.register(
  ArcElement,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Navbar,
    Doughnut,
    Line,
    PolarArea,
    DashboardWidget,
    CrossTeamPerformanceChart,
    BusinessValueChart,
    AgileMaturityScoreChart,
  },
  data() {
    return chartConfig;
  },
};
</script>

<style scoped>
.aim-insight {
  display: flex;
}
.main-content {
  flex: 1;
  padding: 20px;
}
.widgets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
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
.recomandations {
  width: 638px;
  height: 320px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.recomandations h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.recomandations ul {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 14px;
}
.recomandations li {
  margin-bottom: 5px;
  font-size: large;
}
</style>
