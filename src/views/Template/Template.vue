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
          class="text-[15px] text-border text-left mt-2 leading-7 sx:leading-6 line"
        >
          {{ project.details }}
        </div>
        <div class="flex items-center mt-2 w-full">
          <svg
            viewBox="0 0 1024 1024"
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            data-v-ea893728=""
          >
            <path
              fill="white"
              d="M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
            ></path>
          </svg>
          <a
            :href="project.url"
            class="border-b-2 ml-2 border-border text-border w-fit text-[14px]"
          >
            view here
          </a>
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
