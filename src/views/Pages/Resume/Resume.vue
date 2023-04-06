<template>
  <div class="flex flex-col justify-center items-center p-10 sx:p-3 bg-[#fff]">
    <div class="w-10/12 sx:w-11/12 sx:p-5 bg-[#F5F4FC] p-16">
      <div class="w-full flex sx:flex-col justify-end items-end">
        <div class="space-y-2 flex sx:mt-3 flex-col sx:flex md:hidden">
          <a
            href="https://ojochogwu.xyz"
            class="text-xs border-b-2 border-work w-fit"
            >ojochogwu.xyz</a
          >
          <a
            href="https://www.github.com/Ojochogwu866"
            class="text-xs border-b-2 border-work w-fit"
          >
            Github: Ojochogwu866
          </a>
          <a
            href="mailto:dicksonojochogwu@gmail.com?subject=Hello Dickson"
            class="text-xs border-b-2 border-work w-fit"
          >
            dicksonojochogwu@gmail.com
          </a>
          <p class="text-xs border-b-2 border-work w-fit">Abuja, Nigeria</p>
        </div>
        <div class="flex cursor-pointer sx:mt-3 sx:text-left">
          <a
            href="https://www.linkedin.com/in/ojochogwu-d-0838a312b/"
            target="_blank"
            class=""
            ><img class="mr-2 w-4" src="@/assets/Images/linkedin(1).png"
          /></a>
          <div class="flex cursor-pointer" @click="downloadFile">
            <svg
              viewBox="0 0 1024 1024"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              data-v-ea893728=""
            >
              <path
                fill="#394c98"
                d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
              ></path>
            </svg>
            <span class="text-sm">Download</span>
          </div>
        </div>
      </div>
      <div class="flex sx:flex-col">
        <div class="text-left pr-10">
          <div class="">
            <div
              class="text-6xl sx:text-xl text-work leading-[50px] font-bold tracking-wide"
            >
              Ojochogwu <br />
              Dickson
            </div>
            <div class="text-[18px] mt-2">JavaScript & UX Engineer</div>
          </div>
          <div class="mt-3 border-b border-work w-fit pb-5">
            <p class="text-sm leading-7">
              Highly skilled JavaScript developer with about 3 years of
              experience. Proficient in core JavaScript, frameworks,
              pixel-perfect UI development, and building RESTful APIs with
              Node.js. Proven track record of delivering high-quality solutions
              on time and on point. Passionate about ongoing learning and
              professional development.
            </p>
          </div>
          <div class="text-lg mt-4 text-work font-bold">
            Relevant Experiences
          </div>
          <div
            v-for="(company, index) in data.companies"
            :key="index"
            class="flex flex-col mt-4"
          >
            <div class="text-sm font-bold text-work">
              {{ company.role }} –
              <span class="text-gray-600 font-semibold">{{
                company.name
              }}</span>
            </div>
            <span class="mt-1 text-xs font-light tracking-wide">{{
              company.period
            }}</span>
            <div class="mt-4">
              <ul>
                <li
                  v-for="(point, index) in company.points"
                  :key="index"
                  class="leading-7 text-sm"
                >
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
          <div class="text-sm">
            You can see an extended list of my experience here
            <a href class="border-b-2 border-work w-fit"> See more</a>
          </div>
          <div class="mt-2">
            <div class="text-lg text-work font-bold mt-4">Projects</div>
            <div class="text-sm leading-7">
              Links to some of my works can be found here
              <a
                class="border-b-2 border-work w-fit"
                href="https://ojochogwu.xyz/work"
                >ojochogwu.xyz/work, </a
              >and further details can be provided upon request in any form.
            </div>
          </div>
        </div>
        <div class="text-left w-full sx:flex sx:justify-around sx:items-center">
          <div class="">
            <div class="space-y-2 flex flex-col sx:hidden">
              <a
                href="https://ojochogwu.xyz"
                class="text-xs border-b-2 border-work w-fit"
                >ojochogwu.xyz</a
              >
              <a
                href="https://www.github.com/Ojochogwu866"
                class="text-xs border-b-2 border-work w-fit"
              >
                Github: Ojochogwu866
              </a>
              <a
                href="mailto:dicksonojochogwu@gmail.com?subject=Hello Dickson"
                class="text-xs border-b-2 border-work w-fit"
              >
                dicksonojochogwu@gmail.com
              </a>
              <p class="text-xs border-b-2 border-work w-fit">Abuja, Nigeria</p>
            </div>
            <div class="text-work text-sm font-bold mt-4 sx:mt-6">
              Core Technologies
            </div>
            <li
              v-for="(tech, index) in data.technologies"
              :key="index"
              class="text-sm leading-6 font-light tracking-wide"
            >
              {{ tech }}
            </li>
          </div>
          <div class="mt-2 sx:mt-0">
            <div class="text-work text-sm font-bold">Others</div>
            <li
              v-for="(others, index) in data.others"
              :key="index"
              class="text-sm font-light tracking-wide leading-6"
            >
              {{ others }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul li {
  list-style: square;
}
</style>
<script>
import data from "./data";
import { RESUME_PORT } from "../../../../config";
export default {
  components: { data },
  setup() {},
  data() {
    return {
      data,
      fileUrl: `/Ojochogwu-resume.pdf?pdf=true`,
      filePath: `@/public/Ojochogwu-Resume.pdf`,
      fileName: `Ojochogwu-resume.pdf`,
    };
  },
  methods: {
    call() {
      window.open("tel:+2347054700832");
    },
    async downloadFile() {
      const response = await fetch(this.fileUrl);
      const blob = await response.blob();

      const filePath = `./public/${this.fileName}`;
      const file = new File([blob], this.fileName, { type: "application/pdf" });
      const fileUrl = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = this.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
