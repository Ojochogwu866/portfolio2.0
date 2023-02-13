<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="mt-28 text-white text-xs font-semibold">
      Designed & Built by Ojochogwu Dickson — © {{ new Date().getFullYear() }}
    </div>
    <div class="md:hidden mt-7 flex justify-center items-center">
      <a
        target="_blank"
        href="https://github.com/Ojochogwu866"
        class="i hover:border-4 bg-navbg border-transparent rounded-full w-7"
      >
        <img src="@/assets/Images/github.png" alt="github" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/ojochogwu_d"
        class="i hover:border-4 bg-navbg border-transparent rounded-full w-7 ml-4"
      >
        <img class="" src="@/assets/Images/twitter.png" alt="twitter" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ojochogwu-d-0838a312b/"
        class="i hover:border-4 bg-navbg border-transparent rounded-full w-7 ml-4"
      >
        <img src="@/assets/Images/linkedin.png" alt="linkedin" />
      </a>
    </div>
  </div>
</template>
<style scoped>
.i {
  cursor: pointer;
}
.i:hover {
  background: #45b2ff66;
  border: 1px solid #45b2ff66;
}
</style>
