<template>
  <div class="">
    <Nav />
    <div class="w-10/12 pt-24 sx:-mt-24 sx:w-11/12 m-auto">
      <div class="sx:h-4/5 sx:-mt-5">
        <el-carousel
          height="550px"
          indicator-position="none"
          :interval="4000"
          arrow="always"
        >
          <el-carousel-item v-for="(company, index) in data.vinca" :key="index">
            <img
              class="flex object-contain h-128 sx:h-5/5 w-full"
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
          " Vinca is a minimalistic hospital web app i built in react for hospital booking appointments, were healthcare seekers in need of specialized services can easily reach out to the doctors by just using the appointment booking form on the app. It is quite a minimalistic app, that has two major sections, the open client interface and the admin interface which is where bulk of the functionality of the open user interface is controlled. The admin portal collects the appointment or contact forms, sends a response, checks out total appointments per day or whatever intervals, get user details for futher communications. Itss by far most one of my most interesting React projects i have worked on, delivering pixel perfect layouts, scalable functionality and optimum speed performance, at the end of the build, i had to do a number of unit test in order to scissor out bulk of unecessary chunks that could affect the speed of the app, thereby interferring with good user experience and i was able to cut out about 4.29mb off the initial build.",
        stack: "ReactJS, CSS, JavaScript ",
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
