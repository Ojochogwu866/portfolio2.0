<template>
  <div class=" flex flex-row sx:flex-col w-10/12 sx:w-11/12 m-auto justify-center items-center sx:mt-16 mt-36">
    <div class=" flex sx:w-full w-1/2 m-auto">
      <div class=" text-white text-left text-sm mt-4 leading-7 sx:leading-6 tracking-wide sx:tracking-normal font-normal line">Hacking UX engineering should literally be one of the toughest tasks for a Frontend Engineer, i think i scaled that. I am Ux/Solidity Engineer, having gained some level of expertise by implementing and transforming ideas and designs into concrete objects, used VueJs for the first time working on a real-time project. I have 3+ years of experience as a Frontend Engineer and 1+ years in Solidity. I have worked with startups, collaborated with other developers in contributing to existing projects.
      </div>
    </div>
    <div class=" sx:w-full w-1/2 m-auto flex items-center justify-center">
    <div class=" w-2/4 sx:w-3/5 -ml-14 mt-5 relative">
        <img class="img  w-full rounded" src="@/assets/Images/dirk.jpg" alt="dick"/>
        <div class="overlay"></div>
    </div>
      </div>
  </div>
</template>
<script>
export default {
  components:{},
  setup() {
    
  },
}
</script>
<style lang="scss" scoped>
.relative::after{
    position: absolute;
    content: "";
    left: 5%;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid #45b0ff;
    z-index: -1;
    border-radius: 4px;
    top: 5%;
    &:hover{
     border: 1px solid transparent;
    }
}
 .overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #45b0ff;
  transition: opacity 0.4s ease-out;
  cursor: pointer;
  top: 0;
 
} 
.line{
  font-size: 13px;
}
.overlay:hover{
  opacity: 0;
}

</style>
