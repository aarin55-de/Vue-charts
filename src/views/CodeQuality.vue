<template>
  <div class="code-quality">
    <!-- Quality Score Trend and Coverage by Component -->
    <div class="charts-container">
      <div class="chart-item">
        <h3>Quality Score Trend</h3>
        <QualityScoreTrendChart />
      </div>
      <div class="chart-item">
        <h3>Coverage by Component</h3>
        <CoveragebyComponentChart />
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="insight-cards-container">
      <InsightCard
        v-for="(card, index) in insightCards"
        :key="index"
        :title="card.title"
        :score="card.score"
        :percentage="card.percentage"
      />
    </div>

    <!-- Team Metrics Table -->
    <div class="team-metrics-table">
      <table>
        <thead>
          <tr>
            <th>Team Members</th>
            <th>Lines of Code Contributed</th>
            <th>Code Smells Introduced</th>
            <th>Technical Debt Added</th>
            <th>Code Reviews Performed</th>
            <th>Test Coverage</th>
            <th>Bug Fix Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in teamMetrics" :key="member.name">
            <td>
              <span :class="`avatar ${member.avatarClass}`">{{
                member.initial
              }}</span>
              {{ member.name }} <small>{{ member.membersCount }} Members</small>
            </td>
            <td>
              {{ member.linesOfCode }}
              <span :class="getChangeClass(member.locChange)">{{
                member.locChange
              }}</span>
            </td>
            <td>
              {{ member.codeSmells }}
              <span :class="getChangeClass(member.codeSmellsChange)">{{
                member.codeSmellsChange
              }}</span>
            </td>
            <td>
              {{ member.technicalDebt }}
              <span :class="getChangeClass(member.technicalDebtChange)">{{
                member.technicalDebtChange
              }}</span>
            </td>
            <td>
              {{ member.codeReviews }}
              <span :class="getChangeClass(member.codeReviewsChange)">{{
                member.codeReviewsChange
              }}</span>
            </td>
            <td>
              {{ member.testCoverage }}
              <span :class="getChangeClass(member.testCoverageChange)">{{
                member.testCoverageChange
              }}</span>
            </td>
            <td>
              {{ member.bugFixRate }}
              <span :class="getChangeClass(member.bugFixRateChange)">{{
                member.bugFixRateChange
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import InsightCard from "../charts/InsightCard.vue";
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
import CoveragebyComponentChart from "../charts/CoveragebyComponentChart.vue";
import QualityScoreTrendChart from "../charts/QualityScoreTrendChart.vue";

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
  name: "CodeQuality",
  components: {
    InsightCard,
    CoveragebyComponentChart,
    QualityScoreTrendChart,
    Doughnut,
    Line,
    PolarArea,
  },
  data() {
    return {
      ...chartConfig,
      insightCards: [
        { title: "Code Quality Score", score: "(82/100)", percentage: +2.5 },
        { title: "Code Coverage", score: "76%", percentage: +1.8 },
        { title: "Technical Debt", score: "8d", percentage: -2.1 },
        { title: "Build Success Rate", score: "94%", percentage: +0.5 },
        { title: "Total Codebase Size", score: "45K LOC", percentage: -5 },
        {
          title: "Duplicate Code Percentage",
          score: "4.2%",
          percentage: -1.5,
        },
        { title: "Maintainability Index", score: 72, percentage: +2 },
      ],

      teamMetrics: [
        {
          initial: "B",
          avatarClass: "avatar-bob",
          name: "Bob",
          membersCount: 5,
          linesOfCode: "12K",
          locChange: "-15%",
          codeSmells: "3.2%",
          codeSmellsChange: "-8%",
          technicalDebt: "12",
          technicalDebtChange: "-15%",
          codeReviews: "4.8 hours",
          codeReviewsChange: "-20%",
          testCoverage: "78%",
          testCoverageChange: "+5%",
          bugFixRate: "92%",
          bugFixRateChange: "+2%",
        },
        {
          initial: "S",
          avatarClass: "avatar-sam",
          name: "Sam",
          membersCount: 2,
          linesOfCode: "8K",
          locChange: "-10%",
          codeSmells: "2.8%",
          codeSmellsChange: "-12%",
          technicalDebt: "15",
          technicalDebtChange: "-8%",
          codeReviews: "5.2 hours",
          codeReviewsChange: "-15%",
          testCoverage: "82%",
          testCoverageChange: "+8%",
          bugFixRate: "88%",
          bugFixRateChange: "+4%",
        },
        {
          initial: "A",
          avatarClass: "avatar-adam",
          name: "Adam",
          membersCount: 4,
          linesOfCode: "15K",
          locChange: "+12%",
          codeSmells: "3.5%",
          codeSmellsChange: "-5%",
          technicalDebt: "18",
          technicalDebtChange: "-5%",
          codeReviews: "4.5 hours",
          codeReviewsChange: "-25%",
          testCoverage: "75%",
          testCoverageChange: "+6%",
          bugFixRate: "90%",
          bugFixRateChange: "+3%",
        },
      ],
    };
  },
  methods: {
    getChangeClass(change) {
      return change.includes("-") ? "negative-change" : "positive-change";
    },
  },
};
</script>

<style scoped>
.code-quality {
  padding: 20px;
}

.charts-container {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.chart-item {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}

.summary-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}
.insight-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em;
  margin-top: 20px;
  justify-content: space-evenly;
  padding-bottom: 2em;
}

.team-metrics-table table {
  width: 100%;
  border-collapse: collapse;
}

.team-metrics-table th {
  background-color: #ffffff;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}
.team-metrics-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.avatar {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  color: #fff;
  margin-right: 8px;
  font-weight: bold;
}

.avatar-bob {
  background-color: #ffb74d;
}
.avatar-sam {
  background-color: #64b5f6;
}
.avatar-adam {
  background-color: #ef5350;
}

.positive-change {
  color: green;
}
.negative-change {
  color: red;
}
</style>
