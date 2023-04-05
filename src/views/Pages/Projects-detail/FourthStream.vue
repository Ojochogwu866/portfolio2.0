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
            v-for="(company, index) in data.fourthstream"
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
        title: "FourthStream",
        details:
          "At Fourth stream, I worked as a frontend developer, built and manintained the user interface for investors. Fourthstream is a financial service company, handling and processing investments by users, and ROI in due date. I worked with the backend develper to enure a perfectly working application. The web app was built majorly in Javascript, and it involved major technicalities, since it's major function had to do with payment and ROI,  and integration with payment infracstructures. Fully built and maintained for the time been, of a successful launch.",
        url: "https://fourthstreamcapital.com",
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
