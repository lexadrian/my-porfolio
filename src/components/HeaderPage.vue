<template>
  <header :class="{ headerBg: isScroll }">
    <div class="brand">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="name">
        <h2>L.A.L</h2>
        <p for="">Portfolio</p>
      </div>
    </div>
    <div :class="toggleNav ? 'showNav' : 'nav'">
      <ul>
        <li v-for="(item, key) in navLink" :key="key">{{ item.name }}</li>
      </ul>
    </div>
    <div :class="[toggleNav && 'rotateHamburger', 'hamburger']" @click="toggle">
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
      toggleNav: false, // toggle the navigation menu in mobile
      isScroll: false, // watch if the window is iscroll
    };
  },
  created() {
    /**
     * listen to window scroll
     */
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggle() {
      // toggle the navigation menu
      this.toggleNav = !this.toggleNav;
    },
    handleScroll() {
      /**
       * watch the window scroll
       * if the window is scroll greater than to 10px the header will add a background color
       * if the window scroll is less than to 10px the header will back to default
       */
      const scroll = (this.windowTop = window.top.scrollY);
      if (scroll > 10) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  transition: 0.4s ease-in-out;
  display: flex;
  padding: size(25) size(45);
  position: fixed;
  width: 100%;
  color: #fff;
  .hamburger {
    display: none;
    width: size(50);
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    right: size(15);
    top: size(25);
    padding: 0 size(2);
    border-radius: size(3);
    div {
      border-top: size(1) solid #fff;
      margin-bottom: size(5);
      text-align: right;
      position: relative;
      transition: 0.4s ease-in-out;
      &:nth-child(1) {
        width: size(20);
      }
      &:nth-child(2) {
        width: size(25);
      }
      &:nth-child(3) {
        width: size(30);
      }
    }
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
    position: relative;
    right: size(100);
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
.headerBg {
  background: #000;
  padding: size(15) size(35);
  transition: 0.4s ease-in-out;
}
// media queries
@include mobile-screen {
  header {
    flex-direction: column;
    padding: size(15) 0 size(20);
    position: fixed;
    .hamburger {
      display: flex;
    }
    .brand {
      padding-left: size(20);
    }
    .nav {
      background: #000;
      color: #fff;
      width: 100%;
      max-height: 0;
      overflow: hidden;
      transition: 0.4s ease-in;
      right: 0;
      display: flex;

      justify-content: flex-start;
      align-items: flex-start;
      ul {
        li {
          &:nth-child(1) {
            margin-top: size(20);
          }
          text-align: left;
          margin-bottom: size(25);
          display: block;
        }
      }
    }
  }
  .headerBg {
    background: #000;
    padding: size(15) 0;
  }
}
/**
  * this class is the speciel class for the animation
 */
.showNav {
  @extend .nav;
  max-height: size(500) !important;
  overflow: auto;
  transition: 0.4s ease-in;
}
.rotateHamburger {
  div {
    transition: 0.4s ease-in-out;
    &:nth-child(1) {
      width: size(20) !important;
      transform: rotate(53deg);
    }
    &:nth-child(2) {
      width: size(0) !important;
      transform: rotate(129deg);
      position: absolute !important;
      top: 0;
    }
    &:nth-child(3) {
      width: size(20) !important;
      transform: rotate(129deg);
      top: -6px;
    }
  }
}
</style>
