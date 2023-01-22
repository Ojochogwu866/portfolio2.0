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
            v-for="(company, index) in data.sonvisage"
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
        title: "Sonvisage",
        details:
          " Working on Sonvisage is the first time i would be programming in Vue. The only things i had handy were the framework documentation, youtube videos google to wrap up a project in quite a short interval. It was quite difficult, i must admit, jumping on a real-time project, that is large and being expected to deliver a completely wrapped up project, i really found out i could work under pressure. I was able to rebuild major components of the existing interface before picking up my module which was a core in the entire build. Implementing a client interface that would be handling a large quantity of confidential data majorly health records requires expertise in implementing Navigation guards, error identification on data input to ease user experience when filling form data, User access authentications and user verification on the client side. In addition i was able to finish the build, making use of necessary libraries for getting live data, data manipulation for displaying on charts and interpretation. Finally, i carefully was able to implement based on the design requirement, every layout as intended, fonts, cards, navigations and functional responses, and after satisfactory Beta-tests, launch for full usage in necessary quaters.",
        stack: "VueJs, Tailwind-Css, JavaScript ",
        url: "https://sonvisage.com",
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
