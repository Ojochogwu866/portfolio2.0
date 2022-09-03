<template>
  <router-link :to="to"  v-if="type === 'workplaces'"   class=" inset-0 transform hover:-translate-y-5 transition duration-500 flex flex-col justify-center items-center w-full h-40 px-6 py-8 shadow-nav bg-bg">
   
    <div class="relative flex justify-center items-center w-12 h-12 rounded-full border border-none p-1 bg-bg shadow-nav">
      <img class="w-10 rounded-border" :src="src" alt="">
    </div>
    <div  class="flex flex-col text-xs text-white mt-3">{{name}}
      <a target="_blank" class=" mt-2 cursor-pointer text-header underline" :href="href">{{link}}</a>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'Cards',
  components: {
  },
  props: {
    list: Array,
    name: {
    type: String, 
    default:''
    },
    path: String,
    src: {
       type: String,
       default: ''
    },
    href:{
      type: String,
      default:''
    },
     to:{
      type: String,
      default:''
    },
    link:{
      type: String,
      default:''
    },
      type: {
      type: String,
      default: 'workplaces'
    }
  },
  data: () => ({

  }),
  methods: {
    goToPath (x) {
      this.$router.push({ name: 'Detailed-description' })
    },
        getPictureUrl (url) {
        return require(`@/assets/${url}`)
    },
}
}
</script>

<style>
</style>
