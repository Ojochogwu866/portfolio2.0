<template>
  <div class="flex flex-col sx:w-11/12 w-10/12 mt-36 text-left m-auto">
    <div
      class="text-5xl sx:text-3xl sx:mt-20 font-bold tracking-wide text-header"
    >
      Look-Up
    </div>
    <div class="sx:flex flex-col grid grid-cols-2 gap-2">
      <div class="">
        <div
          class="text-white text-left text-sm mt-4 leading-7 sx:leading-6 tracking-wide sx:tracking-normal font-normal line"
        >
          My work-shelf, A cross-section of things i have built, Web Apps and
          Others
        </div>
        <div class="mt-4">
          <router-link
            class="work bg-transparent border border-work rounded px-6 py-3 text-white text-xs font-normal"
            to="/Work"
            >Work Shelf</router-link
          >
        </div>
      </div>
      <div class="sx:mt-6 w-full flex flex-col justify-end items-end">
        <div
          class="text-white text-left text-sm mt-4 leading-7 sx:leading-6 tracking-wide sx:tracking-normal font-normal line"
        >
          Read my blog, you may find something useful there
        </div>
        <div class="mt-4">
          <router-link
            to="/blog"
            class="work bg-transparent border border-work rounded px-6 py-3 text-white text-xs font-normal"
            >Blog</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.line {
  font-size: 13px;
}
.work:hover {
  transform-origin: left;
  width: 100%;
  transform: scaleX(0);
  background: #394c98;
  transition: 0.5s;
}
</style>
