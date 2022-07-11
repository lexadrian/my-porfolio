<template>
  <div class="banner">
    <div class="overlay">
      <h1 class="hello">Hello,</h1>
      <h1 class="name">I'm <span>Lex Adrian</span></h1>
      <p class="front-end">
        Front-End Web <span class="developer">Developer.</span>
      </p>
      <p class="description">
        I'm a Freelance Front-End Web Developer, I love to help students,
        Businesses, Small organizations to make a Creative and Responsive
        website. As a Front-End Web Developer, I enjoyed designing and solving
        logical problems. If you want to know me more visit my Blog.
      </p>
      <div class="contact-me">
        <span>Contact Me</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerPage",
};
</script>
<style lang="scss" scoped>
.banner {
  display: flex;
  @include bg("@/assets/banner/bg.gif", cover);
  background-position: center;
  .overlay {
    padding: size(80) size(50);
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.7);
    h1 {
      font-weight: 100;
      font-size: size(60);
      letter-spacing: size(5);
    }
    .hello {
      color: #fff;
      margin-bottom: 0;
    }
    .name {
      color: #fff;
      margin: 0;
      span {
        color: $primary-color;
      }
    }
    .front-end {
      color: $primary-color;
      margin: 0;
      font-size: size(25);
      font-weight: 100;
      letter-spacing: size(5);
      .developer {
        color: #fff;
      }
    }
    .description {
      letter-spacing: size(1);
      color: #fff;
      max-width: 60vw;
    }
    .contact-me {
      width: size(120);
      @include flexCenter;
      color: $primary-color;
      cursor: pointer;
      border-radius: size(5);
      margin-top: size(30);
      padding: size(15) size(20);
      border: 1px solid $primary-color;
      transition: 0.4s ease-in-out;
      &:hover {
        background: $primary-color;
        color: #fff;
      }
      span {
        text-transform: uppercase;
      }
    }
  }
}

// media queries
@include mobile-screen {
  .banenr {
  }
  .overlay {
    padding: size(100) size(30) size(50) size(30) !important;
    h1 {
      font-size: size(35) !important;
    }
    .hello {
      margin-top: 0;
    }
    .description {
      max-width: 100% !important;
      text-align: justify;
    }
  }
}
</style>
