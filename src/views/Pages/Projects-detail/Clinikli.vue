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
          " Clinikli is a health care startup meant to connect healthcare providers and health care seekers. I worked as a user interface engineer at clinikli, in building the clinikli web app. I collaborated with the backend engineer and the user interface designer, alongside product manager and others to deliver on building one of the best UI meant to handle data and help thousands of users network from different locations. For my role, aside owning features on the product and integrating using the best methods possible, i also working with my knowledge of sorting algorithm to refer and select most consulted medical professionals, and health care providers in defferent locations. I and the other engineers on the team where able to deliver based on the intention of the organization, literally translating design to concrete   product.                                                                                We built and finisheg a functional, and scalable application, while also performeing javascript testing to ensure performance, and least minimal bugs on my code",
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
