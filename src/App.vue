<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <!--Code written by @Muhammed Cavdarci ©2025-->
  <div class="app">
    <Navbar />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background: #f0e9d8 !important;
}

.main-content {
  margin-top: 82px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: #f0e9d8 !important;
}
</style>
