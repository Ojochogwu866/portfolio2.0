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
            v-for="(company, index) in data.sonvisage"
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
        title: "Sonvisage",
        details:
          " Sonvisage is an IOT start up, building hardware products for health care, environement devices, and agri-tech. At sonvisage, i served as a UI engineer, i was involved in building and maintaining of the frontend web application, which housed interaction from thousands of users over africa, making use of the organizational products, collectiong persona data, data's from campaigns, data from use of devices. At sonviage, aside re-building a large web app from scratch and integrating with RESTFul API for performance, i was involved in ensuring data security on the platform, ensuring all data's collected from users and products where safe, and the forms where not failing. I used Vuex for state management of complex data, also carried out data visulaization on the admin session. My role involved CI/CD for frontend development, as the build was progressive, and regualrly involved shipment of new features to enhance client needs and requests.",
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
