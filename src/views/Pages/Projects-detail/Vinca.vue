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
          <el-carousel-item v-for="(company, index) in data.vinca" :key="index">
            <img
              class="flex object-contain h-128 sx:h-full w-full"
              :src="company.image"
              alt=""
            />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sx:-mt-40">
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
        title: "Vinca",
        details:
          " At Vinca, I built and manintained the user interface for ensuring successful booking of appointments with the organization. Vinca is a health care organization involved in special surgical activities, and the web app is to endure easy and seamless connection between Doctors and health care seekers. The extensive adin system, has a message and response session, where he admin/doctor can easily see a patients request and respond to a message handy, and also filtering messages based on time sent, by utilizing functional methods in react.  The total appointments for a duration can also be viwed, as well as number of appointments attended to. I worked integrally with the backend developer to enable integration with the RESTFul API.",
        stack: "ReactJS, CSS, JavaScript ",
        url: "https://vincahospital.com",
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
