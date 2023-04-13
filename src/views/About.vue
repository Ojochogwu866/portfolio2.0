<template>
  <div
    class="h-screen flex flex-row sx:flex-col w-10/12 sx:w-11/12 sx:mt-10 mx-auto items-center"
  >
    <div class="flex sx:w-full w-1/3">
      <div
        class="text-border text-left text-[14px] leading-8 sx:leading-7 tracking-wide sx:tracking-normal font-normal line"
      >
        Highly skilled JavaScript developer with about 3 years of experience.
        Proficient in core JavaScript, frameworks, pixel-perfect UI development,
        and building RESTful APIs with Node.js. Proven track record of
        delivering high-quality solutions on time. Passionate about ongoing
        learning and professional development. I design and implement high
        quality web-based javascript applications that are scalable and user
        friendly, by applying my knowledge in usage of my tech skills,
        stack-wise, and all other required knowledge and experience.
      </div>
    </div>
    <div class="sx:w-full w-2/3">
      <div
        class="left-0 ml-6 sx:ml-0 overflow-y-hidden w-full overflow-x-scroll sx:scrollbar sx:scrollbar-none text-header text-left tracking-tighter font-bold opacity-30"
      >
        – FRONTEND
      </div>
      <div
        class="left-0 dev ml-6 sx:ml-0 w-full overflow-y-hidden overflow-x-scroll sx:scrollbar sx:scrollbar-none text-header text-left tracking-tighter font-bold opacity-30"
      >
        –DEVELOPER
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  setup() {},
};
</script>
<style lang="scss" scoped>
.relative::after {
  position: absolute;
  content: "";
  left: 5%;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid #45b0ff;
  z-index: -1;
  border-radius: 4px;
  top: 5%;
  &:hover {
    border: 1px solid transparent;
  }
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #45b0ff;
  transition: opacity 0.4s ease-out;
  cursor: pointer;
  top: 0;
}

.overlay:hover {
  opacity: 0;
}
.left-0 {
  
  letter-spacing: -10px;
  font-size: 7rem;
  line-height: 85px;
}
.dev {
  font-family: Open Sauce, arial, sans-serif;
  letter-spacing: -8px;
  font-size: 7rem;
  line-height: 80px;
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
}
</style>
