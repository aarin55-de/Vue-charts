<template>
    <main id="dashboard">
        <div class="dashboard">
      <div class="main-content">
        <Navbar/>
        <h2>Overview</h2>
        <div class="widgets">
            
          <DashboardWidget title="Agile Maturity Score">
            <Doughnut :data="data" :options="options" />
          </DashboardWidget>
          <DashboardWidget title="Sprint Progress">
            <Doughnut :data="data2" :options="options" />
          </DashboardWidget>
          <DashboardWidget title="Velocity Trend">
            <PolarArea :data="velocity" :options="options" />
          </DashboardWidget>
          <DashboardWidget title="Work in Progress">
            <h1>12 SP</h1>
            <h1>WIP Limit: 15</h1>
          </DashboardWidget>
          <DashboardWidget title="Sprint Burndown">
            <Line :data="dataLine" :options="options" />
          </DashboardWidget>
          <DashboardWidget title="Predictability (Last 5 Sprints)">
            <Doughnut :data="data2" :options="options" />
            <p>80% Committed vs Delivered</p>
          </DashboardWidget>
          <DashboardWidget title="Average Cycle Time">
            <h1>5.2 days</h1>
            <h1>0.8 days from last sprint</h1>
          </DashboardWidget>
          <DashboardWidget title="Average Lead Time">
            <h1>7.5 days</h1>
            <h1>0.3 days from last sprint</h1>
          </DashboardWidget>
          <DashboardWidget title="Average Throughput Time">
            <h1>22</h1>
            <h1>3 from last sprint</h1>
          </DashboardWidget>
          <DashboardWidget title="Defect Density">
            <h1>0.8 per 100 SP</h1>
            <h1>0.2 from last sprint</h1>
          </DashboardWidget>
        </div>
      </div>
    </div>
    </main>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import DashboardWidget from '../components/DashboardWidget.vue';
import { Chart as ChartJS, ArcElement,CategoryScale,
    RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { Line } from 'vue-chartjs'
import { PolarArea } from 'vue-chartjs'
import * as chartConfig from '../chartConfig'

ChartJS.register(ArcElement,CategoryScale,
RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title, Tooltip, Legend)

  export default {
    components: {
      Navbar,
      Doughnut,
      Line,
      PolarArea,
      DashboardWidget,
    },
    data() {
    return chartConfig
  }
  };
  </script>
  
  <style scoped>
  .dashboard {
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
  </style>
  