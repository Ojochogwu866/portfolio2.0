<template>
  <div
    class="flex flex-col overflow-y-scroll overflow-x-hidden scrollbar scrollbar-none"
  >
    <Nav />
    <div
      class="flex w-10/12 sx:w-11/12 m-auto justify-center items-center flex-col"
    >
      <div class="mt-20 text-base font-semibold text-border">/Work</div>
      <div class="text-xs mt-4 text-border">
        Please click on each card to read project brief and click on
        corresponding links to visit the web-app.
      </div>
      <div
        class="w-full mt-6 m-auto justify-center items-center grid grid-cols-3 sx:grid-cols-1 gap-4"
      >
        <cards
          class="cursor-pointer"
          v-for="(p, i) in filteredProducts"
          :key="i"
          :name="p.name"
          :src="p.image"
          :href="p.href"
          :to="p.to"
        />
      </div>
    </div>
    <Copyright />
  </div>
</template>
<script>
import PagePropertiesMixin from "../../store/pagepropertymixins";
import Cards from "@/components/Worksplaces.vue";
import Nav from "../../components/Nav.vue";
import { createMeta } from "@/store/helpers";
import Copyright from "../../components/Copy.vue";
export default {
  mixins: [PagePropertiesMixin],
  name: "Projects",
  components: { Cards, Nav, Copyright, createMeta },
  setup() {},
  data: () => ({
    selectedCategory: "workplaces",
    products: [
      {
        name: "Clinikli",
        image: require("@/assets/Images/clinikli.svg"),
        href: "https://clinikli.com/",
        link: "clinikli.com",
        to: "/work/clinikli",
        category: ["workplaces"],
      },
      {
        name: "Sonvisage",
        image: require("@/assets/Images/sonvisage.png"),
        href: "https://sonvisage.com",
        link: "sonvisage.com",
        to: "/work/sonvisage",
        category: ["workplaces"],
      },
      {
        name: "Vinca Hospital",
        image: require("@/assets/Images/vinca.png"),
        href: "https://vincahospital.com",
        link: "vincahospital.com",
        to: "/work/vinca",
        category: ["workplaces"],
      },
      {
        name: "Fourthstream Capital",
        image: require("@/assets/Images/fourthstream.png"),
        href: "https://fourthstreamcapital.com",
        to: "/work/Fourthstream",
        category: ["workplaces"],
      },

      {
        name: "Ojochogwu — My Portfolio",
        image: require("@/assets/Images/logs.svg"),
        link: "ojochogwu.xyz",
        to: "/work/ojochogwu",
        category: ["workplaces"],
      },
    ],
  }),
  methods: {
    metaInfo: {
      title: `My Résumé`,
    },
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.category.includes(this.selectedCategory)
      );
    },
  },
};
</script>
