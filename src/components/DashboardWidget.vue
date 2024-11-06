<template>
    <div class="widget">
      <h3>{{ title }}</h3>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
    },
  };
  </script>
  
  <style scoped>
  .widget {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
  }
  .widget h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  </style>
  