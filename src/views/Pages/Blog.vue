<template>
  <div class="flex flex-col">
    <Nav />
    <div
      class="flex w-10/12 sx:w-11/12 m-auto justify-center items-center flex-col"
    >
      <div class="mt-20 text-base font-semibold text-border">/Blog</div>
      <div class="grid sx:flex flex-col justify-center grid-cols-2 w-full">
        <div
          class="w-[90%] sx:w-full sx:px-2 flex text-left flex-col mb-10 mt-6 sx:mt-3 m-auto px-6 py-3 bg-bg shadow-nav rounded"
          v-for="item in result"
          :key="item.id"
        >
          <div
            class="text-base text-border sx:text-sm font-semibold tracking-wide"
          >
            {{ item.title }}
          </div>
          <div
            class="text-white text-sm sx:text-xs mt-3 leading-7 sx:leading-6 tracking-wide sx:tracking-normal font-normal line"
          >
            {{ item.brief }}
          </div>
          <div
            @click="openUrl(`https://od.hashnode.dev/${item.slug}`)"
            class="cursor-pointer mt-4 sx:mt-2 pb-2 text-xs text-border border-b border-work w-auto"
          >
            Read full article
          </div>
        </div>
      </div>
    </div>
    <Copyright />
  </div>
</template>
<script>
import gql from "graphql-tag";
import Nav from "../../components/Nav.vue";
import Copyright from "@/components/Copy.vue";
export default {
  components: { Nav, Copyright },
  data() {
    return {
      result: [],
      link: `https://od.hashnode.dev/`,
    };
  },
  mounted() {
    this.getUserArticles();
  },
  methods: {
    getUserArticles() {
      fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.VUE_GQL_AUTH,
        },
        body: JSON.stringify({
          query: `
                query GetUserArticles{
                user(username: "ODDev"){
                publication {
                posts(page: 0) {
                title
                brief
                slug
      }}}}`,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          this.result = response.data.user.publication.posts;
        });
    },
    openUrl(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
