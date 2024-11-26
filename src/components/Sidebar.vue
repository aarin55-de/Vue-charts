<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <!-- Menu Toggle -->
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">
          {{
            is_expanded
              ? "keyboard_double_arrow_left"
              : "keyboard_double_arrow_right"
          }}
        </span>
      </button>
    </div>

    <!-- Menu Items -->
    <div class="menu">
      <h3>Insights</h3>
      <router-link to="/dashboard" class="button">
        <span class="material-icons">dashboard</span>
        <span class="text">Overview</span>
      </router-link>
      <router-link to="/stories" class="button">
        <span class="material-icons">article</span>
        <span class="text">Stories</span>
      </router-link>
      <router-link to="/code-insight" class="button">
        <span class="material-icons">code</span>
        <span class="text">Code Insights</span>
      </router-link>
      <router-link to="/defect-density" class="button">
        <span class="material-icons">dangerous</span>
        <span class="text">Defect Density</span>
      </router-link>
      <router-link to="/aeim-insight" class="button">
        <span class="material-icons">insights</span>
        <span class="text">AeIM Insights</span>
      </router-link>
    </div>

    <!-- Footer Menu -->
    <div class="menu">
      <router-link to="/settings" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Profile</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import logoURL from "../assets/LogoPru.png";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  height: calc(100vh - 110px); /* Adjust height to fit under navbar */
  width: calc(2rem + 32px);
  position: fixed;
  top: 110px; /* Push down below the navbar */
  left: 10px;
  border-radius: 12px;
  overflow: hidden;
  padding: 1rem;
  transition: width 0.3s ease-in-out;

  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    img {
      width: 30px;
      height: 30px;
    }

    .logo-text {
      margin-left: 10px;
      font-size: 1.25rem;
      color: var(--light);
      transition: opacity 0.3s ease-in-out;
    }
  }

  .menu-toggle-wrap {
    margin-top: 1em;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    .menu-toggle {
      border: none;
      background: transparent;
      cursor: pointer;

      .material-icons {
        font-size: 1.5rem;
        color: var(--light);
      }

      &:hover .material-icons {
        color: var(--primary);
      }
    }
  }

  .menu h3 {
    display: flex;
    justify-content: center;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: background-color 0.3s ease-in-out;

      .material-icons {
        font-size: 1.5rem;
        margin-right: 0;
        color: var(--light);
        transition: margin-right 0.3s ease-in-out;
      }

      .text {
        color: var(--light);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 3px solid var(--primary);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }
  }

  &.is-expanded {
    width: 240px;

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
