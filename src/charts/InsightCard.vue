<template>
  <div class="insight-card">
    <div class="card-title">{{ title }}</div>
    <div class="card-score">
      <span class="score">
        {{ score }}<span v-if="requiresOutOf100">/100</span>
      </span>
      <span
        class="percentage"
        :class="{ positive: percentage >= 0, negative: percentage < 0 }"
      >
        {{ percentage >= 0 ? "+" : "" }}{{ percentage }}%
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    score: Number,
    percentage: Number,
  },
  computed: {
    requiresOutOf100() {
      // Add the titles for which `/100` should be displayed
      const outOf100Titles = [
        "Pipeline Success Rate Percentage",
        "Average Pipeline Duration",
      ];
      return outOf100Titles.includes(this.title);
    },
  },
};
</script>

<style scoped>
.insight-card {
  border: 1px solid #ddd;
  padding: 1em;
  border-radius: 8px;
  text-align: center;
  width: 150px;
  margin: 5px;
}
.card-title {
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 8px;
}
.card-score {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.score {
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
}
.percentage {
  font-size: 12px;
}
.percentage.positive {
  color: green;
}
.percentage.negative {
  color: red;
}
</style>
