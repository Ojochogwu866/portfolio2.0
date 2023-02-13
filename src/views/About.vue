<template>
  <div
    class="h-screen flex flex-row sx:flex-col w-10/12 sx:w-11/12 sx:mt-10 mx-auto items-center"
  >
    <div class="flex sx:w-full w-1/3">
      <div
        class="text-white text-left text-sm leading-7 sx:leading-6 tracking-wide sx:tracking-normal font-normal line"
      >
        I design and implement high quality web-based javascript applications
        that are scalable and user friendly, by applying my knowledge in usage
        of my tech skills, stack-wise, and all other required knowledge and
        experience. I have about 3 years of experience in doing this repeatedly
        although in different organizations, and i have helped each of this
        organization scale major problems they are trying to solve on their
        client interactions with UI and accessibility, hence boosting their
        coperate productivity and enhancing company wide growth accross all
        teams.
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
.line {
  font-size: 13px;
}
.overlay:hover {
  opacity: 0;
}
.left-0 {
  font-family: Open Sauce, arial, sans-serif;
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
