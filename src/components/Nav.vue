<template>
  <div class="z-50 w-full shadow-nav">
    <div class="w-10/12 flex py-2 justify-between items-center m-auto">
      <div @click="goToPath" class="sx:w-9 cursor-pointer">
        <div class="text-sm text-left sx:px-0 px-8 text-border font-normal">
          OJOCHOGWU–D
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <router-link
          active-class="active"
          to="/blog"
          class="l sx:px-0 px-8 text-sm text-border font-normal"
          ><span>BLOG</span></router-link
        >
        <router-link
          active-class="active"
          class="l text-sm sx:px-0 px-8 text-border font-normal"
          to="/Resume"
          ><span>RESUME</span></router-link
        >
        <router-link
          active-class="active"
          class="l text-sm sx:px-0 px-8 text-border font-normal"
          to="/Work"
          ><span>WORK</span></router-link
        >
      </div>
      <div class="sx:hidden flex justify-center items-center">
        <a
          target="_blank"
          href="https://github.com/Ojochogwu866"
          class="i hover:border-4 bg-navbg border-transparent rounded-full w-7 mr-8"
        >
          <img src="@/assets/Images/github.png" alt="github" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/ojochogwu_d"
          class="i hover:border-4 bg-navbg border-transparent rounded-full w-7 mr-8"
        >
          <img class="" src="@/assets/Images/twitter.png" alt="twitter" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ojochogwu-d-0838a312b/"
          class="i hover:border-4 bg-navbg border-transparent rounded-full w-7 mr-8"
        >
          <img src="@/assets/Images/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToPath(x) {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style lang="scss" scoped>
.l.active {
  background: #45b2ff66;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  width: 30%;
  padding: 0;
  height: 13px;
  z-index: -100;
  color: white;
  box-shadow: 0 8px 32px 0 #45b2ff66;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.l span::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  top: 22px;
  transform-origin: left;
  transform: scaleX(0);
  background: #9e59aa;
  transition: 0.5s;
  z-index: -1;
}
.l span:hover::before {
  transform: scaleX(1);
}
.shadow-nav {
  transition-delay: 1s;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.i {
  cursor: pointer;
}
.i:hover {
  background: #45b2ff66;
  border: 1px solid #45b2ff66;
}
@media screen and (max-width: 768px) {
  .l span::before {
    top: 18px;
  }
  .l.active {
    width: 50%;
  }
}
</style>
