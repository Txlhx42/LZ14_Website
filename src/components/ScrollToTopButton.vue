<template>
  <button
    class="scroll-to-top"
    @click="scrollToTop"
    aria-label="Nach oben scrollen"
  >
    Nach oben <span aria-hidden="true">↑</span>
  </button>
</template>

<script>
export default {
  name: "ScrollToTopButton",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: absolute;
  right: 24rem;
  bottom: 4.5rem;
  background: transparent;
  color: #f3f3f3;
  border: none;
  border-radius: 0;
  padding: 0.6em 1.2em;
  font-size: 1.1em;
  cursor: pointer;
  box-shadow: none;
  transition: none;
  z-index: 10;
}
.scroll-to-top:hover,
.scroll-to-top:focus {
  background: transparent;
  color: #f3f3f3;
  outline: none;
  text-decoration: underline;
}
@media (max-width: 850px) {
  .scroll-to-top {
    right: 1.2rem;
    bottom: 1.2rem;
    font-size: 1em;
    padding: 0.5em 1em;
  }
}
</style>
