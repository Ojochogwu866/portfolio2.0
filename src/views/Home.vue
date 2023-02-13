<template>
  <div
    class="flex flex-col snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scrollbar scrollbar-none"
  >
    <section class="snap-center">
      <Landing />
    </section>
    <section class="snap-center">
      <About class="" />
    </section>
    <section class="snap-center">
      <Experience />
    </section>
    <section class="snap-center">
      <Work />
    </section>
    <section class="snap-center">
      <Projects />
    </section>
  </div>
</template>
<script>
import Landing from "@/components/Landing.vue";
import Stack from "@/components/Stacks.vue";
import Experience from "@/components/Experience.vue";
import Work from "@/components/Work.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";
import About from "./About.vue";
export default {
  components: {
    Landing,
    Stack,
    About,
    Experience,
    Work,
    Projects,
    Footer,
  },
  setup() {},
};
</script>
