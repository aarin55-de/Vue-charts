<template>
  <div class="app">
    <!-- Navbar -->
    <Navbar />

    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<style lang="scss">
:root {
  --primary: #ffffff;
  --primary-alt: #ffffff;
  --grey: #d1d5db;
  --dark: #3e8afb;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 250px; /* Adjusted for sidebar width */
  --navbar-height: 70px; /* Navbar height */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  flex-direction: column; /* Ensures Navbar appears on top */
}

.main-content {
  margin-top: var(--navbar-height); /* Reserve space for the navbar */
  margin-left: var(--sidebar-width); /* Reserve space for the sidebar */
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  min-height: calc(
    100vh - var(--navbar-height)
  ); /* Dynamic height adjustment */
}
</style>
