<template>
  <div>
    <apexchart
      type="treemap"
      :options="chartOptions"
      :series="seriesData"
      height="400"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        chart: {
          toolbar: { show: false }
        },
        title: {
          text: 'Test Chart'
        },
        colors: ['#FF6B6B', '#FFD93D', '#4CAF50', '#3498db'],
        plotOptions: {
          treemap: {
            enableShades: false,
            distributed: true
          }
        }
      },
      seriesData: [
        {
          data: [
            { x: 'Critical', y: 20 },
            { x: 'High', y: 50 },
            { x: 'Medium', y: 30 },
            { x: 'Low', y: 40 } 
          ]
        }
      ]
    };
  }
};
</script>
