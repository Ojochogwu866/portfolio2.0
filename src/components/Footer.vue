<template>
    <div class=" w-10/12 sx:w-11/12 m-auto justify-center items-center flex flex-col mt-36">
        <div class=" sx:w-full  w-1/2 m-auto text-white text-sm leading-7 font-light tracking-wide text-center flex justify-center items-center ">I Would love to hear from you if you are interested in connecting with me or anything at all. Send Me a Message</div>
        <div class=" mt-8">
         <a href="mailto:<nowiki>dicksonojochogwu@gmail.com?subject=HTML link" class=" bg-work py-3 text-xs font-normal px-6 text-white">Send Me a Messaage</a>
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