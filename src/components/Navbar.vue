<template>
    <div class="navbar">
      <div class="navbar-items">
        <Multiselect
          v-for="item in selections"
          :key="item.label"
          :options="item.options"
          v-model="item.value"
          :placeholder="item.label"
          class="dropdown"
        />
        <i class="fas fa-calendar-alt"></i>
        <i class="fas fa-bell"></i>
      </div>
    </div>
  </template>
  
  <script>
  import Multiselect from "@vueform/multiselect";
  import "@vueform/multiselect/themes/default.css";
  
  export default {
    components: {
      Multiselect,
    },
    data() {
      return {
        selections: [
          { label: "Role", options: ["Scrum Master", "Developer", "Tester"], value: "" },
          { label: "Project", options: ["Project A", "Project B"], value: "" },
          { label: "Sprint", options: ["Sprint 1", "Sprint 2"], value: "" },
          { label: "PI", options: ["PI 1", "PI 2"], value: "" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3E8AFB;
    padding: 10px 20px;
    color: white;
  }
  
  .navbar-items {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .dropdown {
    flex: 1; /* Makes each dropdown take an equal portion of the available space */
    margin: 0 10px;
    color: #3E8AFB;
  }
  
  .navbar i {
    margin-left: 15px;
    cursor: pointer;
  }
  </style>
  