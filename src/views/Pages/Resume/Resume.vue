<template>
    <div class="w-full text-left m-auto h-full p-12 sx:p-4 flex flex-col justify-center items-center bg-gray-100">
        <div class=" w-full flex flex-col justify-end items-end">
            <a href="https://www.linkedin.com/in/ojochogwu-d-0838a312b/" target="_blank" class=""><img class="mr-2 w-4" src="@/assets/Images/linkedin(1).png"/></a>
            <button class=" flex justify-center items-center"><img class="mr-2 w-3 h-3" src="@/assets/Images/download-circular-button.png"/>Download</button>
        </div>
            <div class="w-full  flex justify-center items-start flex-col">
                <div class=" text-7xl sx:text-5xl text-work font-bold tracking-wide">Ojochogwu<br/> Dickson</div>
                <div class=" text-lg font-light">Front-End Developer & Ux Engineer</div>
                <div class=" flex justify-start mt-4 items-start sx:flex-col">
                    
                     <a href="mailto:<nowiki>dicksonojochogwu@gmail.com?subject=HTML link" class="flex justify-center items-center text-sm font-light tracking-wider"><img class=" mr-2 w-4 h-4 " src="@/assets/Images/mail.png"/>dicksonojochogwu@gmail.com</a>
                    <div class=" ml-4  sx:ml-0 text-sm flex justify-center items-center font-light tracking-wider"><img class="mr-2 w-4 h-4" @click="call" src="@/assets/Images/phone-call.png"/>234 70 547 00832</div>
                    <a href="https://ojochogwu.xyz" target="_blank" class="text-sm  ml-4 sx:ml-0 flex justify-center items-center font-light tracking-wider"><img class="mr-2 w-4 h-4" src="@/assets/Images/home(1).png"/>ojochogwu.xyz</a>
                    <a href="https://github.com/Ojochogwu866" target="_blank" class="text-sm ml-4 sx:ml-0 flex justify-center items-center font-light tracking-wider"><img class="mr-2 w-4 h-4" src="@/assets/Images/github(1).png"/>github.com/Ojochogwu866</a>
                </div>
         
            </div>
            <div class="w-full  mt-4 flex sx:flex-col">
                <div class="flex flex-col w-3/5 sx:w-11/12 sx:pr-0 pr-4">
                    <div class=" text-lg text-header font-bold">Relevant Experience</div>
                    <div v-for="(company, index) in data.companies"
                    :key="index" class="flex flex-col mt-4">
                        <div class=" text-sm font-medium text-work">{{company.role}} <span class=" text-gray-600 ">{{company.name}} — {{company.term}}</span></div>
                        <span class=" mt-1 text-xs font-light tracking-wide">{{company.period}}</span>
                        <div class="mt-4">
                            <div class=" text-sm">{{company.intro}}</div>
                        <ul>
                            <li v-for="(point, index) in company.points" :key="index" class="leading-7 text-sm   ">{{point}}</li>
                         </ul>                  
                        </div>
                    </div>
               
                </div>
                <div class=" w-2/5 sx:w-full">
                    <div class="">
                        <div class=" text-header font-bold text-lg">Core Technologies:</div>
                        <div class=" text-work text-sm font-bold mt-4">Programming Languages</div>
                        <div v-for="(tech, index) in data.technologies" :key="index" class=" text-sm leading-6 font-light tracking-wide">{{tech}}
                        </div>
                    </div>
                       <div class=" mt-4">
                        <div class=" text-work text-sm font-bold">Libraries & Frameworks</div>
                        <div v-for="(library, index) in data.libraries" :key="index" class=" text-sm font-light tracking-wide leading-6">{{library}}</div>
                    </div>
                      <div class=" mt-4">
                         <div class=" text-work text-sm font-bold">Design</div>
                        <div v-for="(des, index) in data.design" :key="index" class=" text-sm font-light tracking-wide leading-6">{{des}}</div>
                    </div>
                      <div class=" mt-2">
                         <div class=" text-work text-sm font-bold">Others</div>
                        <div v-for="(others, index) in data.others" :key="index" class=" text-sm font-light tracking-wide leading-6">{{others}}</div> 
                    </div>
                </div>
            </div>
    </div>
</template>
<style scoped>
ul li{
    list-style: square;
}
</style>
<script>
import data from './data'
export default {
    components:{data},
    setup() { 
    },
    data(){
        return{
            data
        }
    },
    methods:{
            call () {
      window.open('tel:+2347054700832')
    },
    }
}
</script>