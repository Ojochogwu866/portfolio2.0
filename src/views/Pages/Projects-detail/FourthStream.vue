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
          <el-carousel-item
            v-for="(company, index) in data.fourthstream"
            :key="index"
          >
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
        title: "FourthStream",
        details:
          "Building a website purely in HTML, CSS, Jquerry and VanillaJs is such a nice flex and great tool. Fouthstream was the first web app i built officially, not in a personal developement or test mode. I actually built with sketches as Ui design, after getting the idea from the owners and i did pretty great. Implementing the Ui from the sketches i drew, every detail noted and carefully followed, and a fully mobile responsive website where users can regiser their accounts to trade with forex brokers. It was meant to be a web app that would enable people register on the platform, invest with the owners, get fixed returns after a particular number of days, unfortunatelly the owners could not conyinue keeping up and the project was terminated.",
        stack: "HTML & CSS, Vanilla JavaScript",
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
