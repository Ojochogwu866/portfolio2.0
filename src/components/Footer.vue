<template>
    <div class=" w-10/12 sx:w-11/12 m-auto justify-center items-center flex flex-col mt-36">
        <div class="text-white text-sm mt-4 leading-7 sx:leading-6 tracking-wide sx:tracking-normal font-normal line sx:w-full  w-1/2 m-auto  text-center flex justify-center items-center ">I Would love to hear from you if you are interested in connecting with me or anything at all. Send Me a Message</div>
        <div class=" mt-8">
         <a href="mailto:<nowiki>dicksonojochogwu@gmail.com?subject=Hi Dickson" class=" bg-work py-3 text-xs font-normal px-6 text-white">Send Me a Messaage</a>
        </div>
        <div class=" w-full flex justify-center items-center">
      <Copyright/>
        </div>
    </div>
</template>
<script>
import Copyright from './Copy.vue'
export default {
  components:{
   Copyright
  }
}
</script>
<style scoped>
.line{
  font-size: 13px;
}
</style>