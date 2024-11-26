<template>
  <div class="navbar">
    <!-- Logo Section -->
    <div class="logo">
      <h2>AeIM</h2>
      <img :src="logoURL" alt="Company Logo" />
    </div>

    <!-- Navigation Items Section -->
    <div class="navbar-items">
      <Multiselect
        v-for="item in selections"
        :key="item.label"
        :options="item.options"
        v-model="item.value"
        :placeholder="item.label"
        class="dropdown"
      />
      <i class="fas fa-calendar-alt calendar-icon"></i>
      <i class="fas fa-bell bell-icon"></i>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import logoURL from "../assets/LogoPru.png";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      logoURL, // Dynamically use the imported logo
      selections: [
        {
          label: "Role",
          options: ["Scrum Master", "Developer", "Tester"],
          value: "",
        },
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
  background-color: #3e8afb;
  padding: 10px 20px;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 0 0 12px 12px;
  z-index: 10;
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
}

.logo h2 {
  margin: 0;
  margin-right: 20px;
  font-size: 35px;
  color: white;
}

.logo img {
  width: 185px;
  height: 85px;
}

.navbar-items {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}

.dropdown {
  margin: 0 10px;
  width: 150px;
}

.navbar i {
  margin-left: 15px;
  cursor: pointer;
  font-size: 20px;
}

.calendar-icon,
.bell-icon {
  color: white;
}
</style>
