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
  created() {},
  mounted() {},
  components: { HeaderPage },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
body {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: $primary-font;
}
p,
label,
a {
  font-family: $secondary-font;
}
</style>
