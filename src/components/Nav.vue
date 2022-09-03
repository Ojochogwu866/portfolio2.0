<template>
<div class=" z-50  w-full fixed  shadow-nav">
    <div class=" w-10/12 flex py-2 justify-between items-center m-auto">
    <div @click="goToPath" class=" cursor-pointer"><img class="w-14" src="@/assets/Images/logs.svg"/></div>
     <div class=" grid grid-cols-3 gap-4">
        <router-link  to="/blog"   class="l sx:px-0 px-8 text-sm text-border font-semibold">Blog</router-link>
        <router-link  class="l text-sm sx:px-0 px-8 text-border font-semibold"  to="/Resume">Resume</router-link>
        <router-link  class="l text-sm sx:px-0 px-8 text-border font-semibold"  to="/Projects">Projects</router-link>
    </div> 
    <div class="sx:hidden flex justify-center items-center">
       <div class="i hover:border-4 hover:border-work rounded-full w-7 mr-8">  
               <img  src="@/assets/Images/github.png" alt="github"/>
       </div>
       <div class="i hover:border-4 hover:border-work rounded-full w-7 mr-8">  
               <img class=" "  src="@/assets/Images/twitter.png" alt="twitter"/>
       </div>
       <div class="i hover:border-4 hover:border-work rounded-full w-7 mr-8">  
               <img  src="@/assets/Images/linkedin.png" alt="linkedin"/>
       </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
        methods:{
                 goToPath (x) {
           this.$router.push({ name: 'Home' })
    },
        }
}
</script>
<style scoped>
.shadow-nav{
transition-delay: 1s;
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
}
.i{
       transition: .4s all;
       cursor: pointer;
}
.l:hover::before{
 background-color: red;
}

</style>