<template>
  <div class="flex flex-row justify-center">
    <div v-for="project in projects" :key="project.title">
      <div class="mt-4 flex-col item-center justify-center">
        <div
          class="font-semibold mt-1 text-xl sx:text-base text-border leading-10"
        >
          ~{{ project.title }}~
        </div>
        <div class="flex flex-row justify-center"></div>
        <div
          class="text-sm text-border text-left mt-2 leading-7 sx:leading-6 line"
        >
          {{ project.details }}
        </div>
        <div class="text-sm text-white text-left mt-3 sx:leading-6">
          Major Language & Libraries: {{ project.stack }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectsCard",
  props: ["projects"],
  methods: {
    getImage(name) {
      return require(`@/assets/Images/${name}.png`);
    },
  },
};
</script>
<style scoped>
.line {
  font-size: 13px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
