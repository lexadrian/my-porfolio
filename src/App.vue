<template>
  <div id="app">
    <HeaderPage />
    <router-view />
  </div>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  components: { HeaderPage },
};
</script>
<style lang="scss">
body {
  margin: 0;
  font-family: $secondary-font;
}
#app {
  width: 100%;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: $primary-font;
  font-weight: 400;
}
</style>
