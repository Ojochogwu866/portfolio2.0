<template>
  <div class="justify-center items-center flex flex-col mt-20 mb-0">
    <div
      class="text-border text-[14px] leading-8 sx:leading-7 tracking-wide sx:tracking-normal font-normal line sx:w-full w-1/2 m-auto text-center flex justify-center items-center"
    >
      I Would love to hear from you if you are interested in connecting with me
      or anything at all. Send Me a Message
    </div>
    <div class="mt-8">
      <a
        href="mailto:dicksonojochogwu@gmail.com?subject=Hello Dickson"
        class="bg-work py-3 text-sm px-6 text-border"
        >Send Me a Messaage</a
      >
    </div>
    <div class="w-full flex flex-col justify-center items-center">
      <Copyright />
    </div>
  </div>
</template>
<script>
import Copyright from "./Copy.vue";
export default {
  components: {
    Copyright,
  },
};
</script>
<style scoped></style>
