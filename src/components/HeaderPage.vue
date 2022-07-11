<template>
  <header>
    <div class="brand">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="name">
        <h2>L.A.L</h2>
        <p for="">Portfolio</p>
      </div>
    </div>
    <div :class="toggleNav ? 'hideNav' : 'nav'">
      <ul>
        <li v-for="(item, key) in navLink" :key="key">{{ item.name }}</li>
      </ul>
    </div>
    <div class="hamburger" @click="toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      navLink: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Skills",
          path: "/",
        },
        {
          name: "Projects",
          path: "/",
        },
        {
          name: "Contact",
          path: "/",
        },
      ],
      toggleNav: false,
    };
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  padding: size(15) size(20);
  .hamburger {
    display: none;
  }
  .brand {
    display: flex;
    flex: 1;
    .name {
      margin-left: size(10);
      margin-top: size(-5);
      h2 {
        margin: 0;
      }
      p {
        letter-spacing: size(4);
        font-style: italic;
        font-size: size(13);
        margin: 0;
      }
    }
    .logo {
      width: size(48);
      img {
        width: 100%;
      }
    }
  }
  .nav {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    ul {
      list-style: none;
      li {
        display: inline;
        margin-right: size(20);
        padding: 0 size(10);
        cursor: pointer;
      }
    }
  }
}
// media queries
@include mobile-screen {
  header {
    flex-direction: column;
    padding: size(10) 0 size(20) 0;
    position: relative;
    .hamburger {
      display: block;
      width: size(20);
      height: size(20);
      border: size(1) solid $dark-color;
      position: absolute;
      right: size(15);
      top: size(15);
      @include flexCenter;
      justify-content: space-evenly;
      padding: 0 size(2);
      flex-direction: column;
      border-radius: size(3);
      div {
        display: flex;
        width: size(20);
        border-top: size(1) solid $dark-color;
      }
    }
    .brand {
      padding-left: size(20);
    }
    .nav {
      justify-content: flex-start;
      background: $dark-color;
      color: #fff;
      width: 100%;
      max-height: 0;
      overflow: hidden;
      transition: 0.4s ease-in;
      @include flexCenter;
      ul {
        li {
          &:nth-child(1) {
            margin-top: size(20);
          }
          text-align: center;
          margin-bottom: size(25);
          display: block;
        }
      }
    }
  }
}
.hideNav {
  @extend .nav;
  max-height: size(250) !important;
  overflow: auto;
  transition: 0.4s ease-in;
}
</style>
