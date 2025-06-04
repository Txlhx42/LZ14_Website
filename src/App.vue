<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <!-- Your page content will go here -->
    </main>
    <Footer />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  margin-top: 82px;
  padding: 2rem;
  flex: 1;
}
</style>
