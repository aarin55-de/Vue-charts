<template>
    <div class="team-table-container">
      <table class="team-table">
        <thead>
          <tr>
            <th>Team Members</th>
            <th>Build Failure Rate</th>
            <th>Time to Fix Broken Builds</th>
            <th>Quality Gate Compliance</th>
            <th>Test Coverage Impact</th>
            <th>Deployment Success Rate</th>
            <th>Security Scan Results</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in teamData" :key="index">
            <td class="team-member">
              <span :class="['badge', member.badgeColor]">{{ member.initial }}</span>
              <span>{{ member.name }}</span>
              <small>{{ member.teamSize }} Members</small>
            </td>
            <td>{{ member.buildFailureRate }} <span :class="getChangeClass(member.buildFailureRateChange)">{{ member.buildFailureRateChange }}%</span></td>
            <td>{{ member.timeToFix }} <span :class="getChangeClass(member.timeToFixChange)">{{ member.timeToFixChange }}%</span></td>
            <td>{{ member.qualityGate }} <span :class="getChangeClass(member.qualityGateChange)">{{ member.qualityGateChange }}%</span></td>
            <td>{{ member.testCoverage }} <span :class="getChangeClass(member.testCoverageChange)">{{ member.testCoverageChange }}%</span></td>
            <td>{{ member.deploymentSuccess }} <span :class="getChangeClass(member.deploymentSuccessChange)">{{ member.deploymentSuccessChange }}%</span></td>
            <td>{{ member.securityScanResults }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teamData: [
          {
            name: 'Bob',
            initial: 'B',
            teamSize: 5,
            badgeColor: 'badge-blue',
            buildFailureRate: '12K',
            buildFailureRateChange: -15,
            timeToFix: '3.2 min',
            timeToFixChange: -8,
            qualityGate: 12,
            qualityGateChange: -15,
            testCoverage: '48%',
            testCoverageChange: -20,
            deploymentSuccess: '78%',
            deploymentSuccessChange: 5,
            securityScanResults: '0 Critical',
          },
          {
            name: 'Sam',
            initial: 'S',
            teamSize: 2,
            badgeColor: 'badge-skyblue',
            buildFailureRate: '8K',
            buildFailureRateChange: -10,
            timeToFix: '2.8 min',
            timeToFixChange: -12,
            qualityGate: 15,
            qualityGateChange: -8,
            testCoverage: '52%',
            testCoverageChange: -15,
            deploymentSuccess: '82%',
            deploymentSuccessChange: 8,
            securityScanResults: '1 Critical',
          },
          {
            name: 'Adam',
            initial: 'A',
            teamSize: 4,
            badgeColor: 'badge-red',
            buildFailureRate: '15K',
            buildFailureRateChange: 12,
            timeToFix: '3.5 min',
            timeToFixChange: -5,
            qualityGate: 18,
            qualityGateChange: -5,
            testCoverage: '45%',
            testCoverageChange: -25,
            deploymentSuccess: '75%',
            deploymentSuccessChange: 6,
            securityScanResults: '2 Critical',
          },
        ],
      };
    },
    methods: {
      getChangeClass(change) {
        return change >= 0 ? 'positive-change' : 'negative-change';
      },
    },
  };
  </script>
  
  <style scoped>
  .team-table-container {
    margin-top: 20px;
  }
  .team-table {
    width: 100%;
    border-collapse: collapse;
  }
  .team-table th, .team-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }
  .team-member {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .badge {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
  }
  .badge-blue { background-color: #3498db; }
  .badge-skyblue { background-color: #5dade2; }
  .badge-red { background-color: #e74c3c; }
  .positive-change { color: green; }
  .negative-change { color: red; }
  </style>
  