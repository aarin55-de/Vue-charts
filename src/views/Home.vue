<template>
  <div class="container">
    <!-- Left Section with Image and Text -->
    <div class="image-section">
      <div class="image-container">
        <img :src="loginleft" alt="Background Image" />
        <h1 class="text-image">
          Elevate Your Agility: Measure, Improve, Succeed
        </h1>
      </div>
    </div>

    <!-- Right Section with Sign-In Form -->
    <div class="signin-section">
      <div><h2>AeIM</h2></div>
      <h2>Sign In</h2>
      <h5>Welcome back! Please enter your details</h5>

      <!-- Email Field -->
      <div class="input-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <!-- Password Field -->
      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <!-- Remember Me Checkbox and Forgot Password Link -->
      <div class="options">
        <label>
          <input type="checkbox" v-model="rememberMe" /> Remember Me
        </label>
        <a href="#" @click.prevent="forgotPassword">Forgot Password?</a>
      </div>

      <!-- Sign In Button -->
      <button class="signin-button" @click="signIn">Sign In</button>

      <!-- Sign In with Google and Microsoft Buttons -->
      <!-- <div class="oauth-buttons">
        <button class="oauth-button google" @click="signInWithGoogle">
          <font-awesome-icon icon="google" /> Sign In with Google
        </button>
        <button class="oauth-button microsoft" @click="signInWithMicrosoft">
          <font-awesome-icon icon="microsoft" /> Sign In with Microsoft
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import loginleft from "../assets/loginleft.png";
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3e8afb;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-section img {
  width: 540px;
  height: 380px;
  object-fit: cover;
}

.text-image {
  margin-top: 11rem;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
}

.signin-section {
  flex: 1;
  padding: 2rem;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.input-group {
  width: 80%;
  margin-bottom: 1rem;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 1.5rem;
}

a {
  color: #007bff;
  cursor: pointer;
}

.signin-button {
  width: 80%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.oauth-buttons {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.oauth-button {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  width: 48%;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.oauth-button.google {
  background-color: #db4437;
}

.oauth-button.microsoft {
  background-color: #2f2f2f;
}

.oauth-button font-awesome-icon {
  margin-right: 0.5rem;
}
</style>
