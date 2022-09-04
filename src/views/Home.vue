<template>
  <div class=" flex flex-col">  
      <Landing/>
      <About class="" />
      <Experience/>
      <Work/>
      <Projects/>
      <Footer/>
  </div>
</template>
<script>
import Landing from '@/components/Landing.vue'
import Stack from '@/components/Stacks.vue'
import Experience from '@/components/Experience.vue' 
import Work from '@/components/Work.vue' 
import Projects from '@/components/Projects.vue' 
import Footer from '@/components/Footer.vue' 
import About from './About.vue'
export default {
  components:{
      Landing, Stack, About, Experience, Work, Projects, Footer
      },
  setup() {
    
  },
}
</script>
