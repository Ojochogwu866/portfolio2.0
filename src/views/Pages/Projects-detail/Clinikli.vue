<template>
  <div class="">
    <Nav />
    <div class="w-10/12 pt-24 sx:-mt-40 sx:w-11/12 mx-auto">
      <div class="sx:h-4/5 sx:-mt-5 sx:mx-auto">
        <el-carousel
          height="550px"
          indicator-position="none"
          :interval="4000"
          arrow="always"
        >
          <el-carousel-item
            v-for="(company, index) in data.clinikli"
            :key="index"
          >
            <img
              class="flex object-contain h-128 sx:h-full w-full"
              :src="company.image"
              alt=""
            />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sx:-mt-44">
        <project-card :projects="projects" />
      </div>
    </div>
    <Copyright />
  </div>
</template>
<script>
import data from "../../Template/data-img";
import ProjectCard from "../../Template/Template.vue";
import Nav from "@/components/Nav.vue";
import Copyright from "@/components/Copy.vue";
export default {
  components: { ProjectCard, Nav, Copyright, data },
  data: () => ({
    data,
    selectedCategory: "all",
    projects: [
      {
        title: "Clinikli",
        details:
          " Clinikli is a web app meant to connect healthcare providers with healthcare seekers, enhancing easy and fast method for people in need of getting in touch with professionals across different fields of health endeavours. This should be probably the biggest projects i have worked on, alongside with the backend engineer and the Ui designer. This is really one of the best platforms i have examined my professional experience, scaling through pixel perfect implementation, performance testing, building lightweight applications and building for optimum performance with respect to user experience. Working on clinikli was my inroduction to using Tailwind CSS, absolutely my first time and i was really impressed by the features it offered in enhancing the size reduction of the web app, thereby giving room to speed and minimal size of the entire app. Clinikli was built with major focus on client interaction as a focus since more of the engagements on the app would be involving people trying to connect with each other.                                                                                        Finally, i was able to deliver clean ui, with pixel perfect layout an clean sheets fully, shipped highly interactive web app that would enable quick client interaction free of Ux hassles.",
        stack: "VueJs, Tailwind-Css, JavaScript ",
        url: "https://clinikli.com",
      },
    ],
  }),
};
</script>
<style scoped>
.el-carousel {
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: transparent;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}
</style>
