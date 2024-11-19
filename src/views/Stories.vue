<template>
  <div class="dashboard">
    <!-- Story Health Indicators -->
    <div class="section">
      <h2>Stories</h2>
      <h3>Story Health Indicators:</h3>
      <div class="story-health">
        <div class="health-indicator">
          <span class="icon green-check">✔️</span>
          <span class="percentage">85%</span>
          <span class="label">Well - Defined</span>
        </div>
        <div class="health-indicator">
          <span class="icon orange-warning">⚠️</span>
          <span class="percentage">10%</span>
          <span class="label">Needs Refinement</span>
        </div>
        <div class="health-indicator">
          <span class="icon red-error">❌</span>
          <span class="percentage">5%</span>
          <span class="label">Poorly Defined</span>
        </div>
        <div class="health-indicator epic">
          <span class="icon epic-label">Epic</span>
          <span class="percentage">20%</span>
          <span class="label">Linked to Epic</span>
        </div>
      </div>
    </div>

    <!-- Progress Completeness -->
    <div class="progress-completeness">
      <!-- Template Completeness -->
      <div class="template-completeness">
        <h3>Template Completeness:</h3>
        <div class="progress-group">
          <span class="progress-label">PI Objectives Template</span>
          <progress class="progress-bar" max="100" value="95"></progress>
          <span class="progress-percentage">95%</span>
        </div>
        <div class="progress-group">
          <span class="progress-label">PI Feature Template</span>
          <progress class="progress-bar" max="100" value="50"></progress>
          <span class="progress-percentage">50%</span>
        </div>
        <div class="progress-group">
          <span class="progress-label">PI Planning Readiness Template</span>
          <progress class="progress-bar" max="100" value="80"></progress>
          <span class="progress-percentage">80%</span>
        </div>
        <div class="warning">
          <span>⚠️ 40% Incomplete Templates</span>
        </div>
      </div>

      <!-- Acceptance Criteria Completeness -->
      <div class="acceptance-completeness">
        <h3>Acceptance Criteria Completeness:</h3>
        <div class="progress-group">
          <span class="progress-label"
            >GIVEN (Initial Context of the Story)</span
          >
          <progress class="progress-bar" max="100" value="90"></progress>
          <span class="progress-percentage">90%</span>
        </div>
        <div class="progress-group">
          <span class="progress-label">WHEN (Actions taken by the user)</span>
          <progress class="progress-bar" max="100" value="85"></progress>
          <span class="progress-percentage">85%</span>
        </div>
        <div class="progress-group">
          <span class="progress-label">THEN (Expected Outcomes)</span>
          <progress class="progress-bar" max="100" value="80"></progress>
          <span class="progress-percentage">80%</span>
        </div>
        <div class="warning">
          <span>⚠️ 20% of stories lack comprehensive acceptance criteria</span>
        </div>
      </div>
    </div>
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

export default {
  name: "Stories",
  components: {
    InsightCard,
  },
  data() {
    return {
      insightCards: [
        {
          title: "Team Velocity Stability",
          score: "(82/100)",
          percentage: +2.5,
        },
        {
          title: "Knowledge Distribution Index",
          score: "76%",
          percentage: +1.8,
        },
        { title: "Team Response Time", score: "8d", percentage: -2.1 },
        {
          title: "Cross-team Collaboration Rate",
          score: "94%",
          percentage: +0.5,
        },
        {
          title: "Technical Debt Accumulation Rate",
          score: "45K LOC",
          percentage: -5,
        },
        {
          title: "Team Innovation Index",
          score: "4.2%",
          percentage: -1.5,
        },
        { title: "Development Process Efficiency", score: 72, percentage: +2 },
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
.dashboard {
  font-family: Arial, sans-serif;
  padding: 20px;
  color: #333;
  width: 100%;
}

.section {
  height: 120px;
  margin-bottom: 2em;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.story-health {
  display: flex;
  gap: 120px;
  padding-top: 10px;
}

.health-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  font-size: 20px;
}

.green-check {
  color: green;
}

.orange-warning {
  color: orange;
}

.red-error {
  color: red;
}
.team-metrics-table table {
  width: 100%;
  border-collapse: collapse;
}
.insight-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em;
  margin-top: 20px;
  justify-content: space-evenly;
  padding-bottom: 2em;
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

.epic .icon {
  background: #0056e0;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
}

.progress-completeness {
  display: flex;
  gap: 20px;
}

.template-completeness,
.acceptance-completeness {
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.progress-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.progress-label {
  flex: 1;
  font-size: 14px;
}

.progress-bar {
  flex: 2;
  height: 10px;
  margin: 0 10px;
  appearance: none;
}

.progress-bar::-webkit-progress-bar {
  background: #f3f3f3;
  border-radius: 5px;
}

.progress-bar::-webkit-progress-value {
  background: #4caf50;
  border-radius: 5px;
}

.progress-bar::-moz-progress-bar {
  background: #4caf50;
}

.progress-percentage {
  flex: 0.5;
  font-size: 14px;
}

.positive-change {
  color: green;
}
.negative-change {
  color: red;
}

.warning {
  color: #e53935;
  font-size: 14px;
  margin-top: 10px;
}
</style>
