import Clinikli from '@/views/Pages/Projects-detail/Clinikli.vue'
import Sonvisage from '@/views/Pages/Projects-detail/Sonvisage.vue'
import Vinca from '@/views/Pages/Projects-detail/Vinca.vue'
import Ojochogwu from '@/views/Pages/Projects-detail/Ojochogwu.vue'
import FourthStream from '@/views/Pages/Projects-detail/FourthStream.vue'
const Details = [
  {
    path: '/work/clinikli',
    name: 'clinikli',
    component: Clinikli,
    meta:{
      title:'clinikli - Ojochogwu Dickson'
    }
  },
  {
    path: '/work/sonvisage',
    name: 'Sonvisage',
    component: Sonvisage,
    meta:{
      title:'sonvisage - Ojochogwu Dickson'
    }
  },
  {
    path: '/work/vinca',
    name: 'Vinca',
    component: Vinca,
      meta:{
      title:'vinca - Ojochogwu Dickson'
    }
  },

  {
    path:'/work/Fourthstream',
    name: 'Fourthstream',
    component:FourthStream,
    meta:{
      title:'Fourthstream - Ojochogwu Dickson'
    }
  },
  {
  path:'/work/ojochogwu',
  name:'ojochogwu',
  component: Ojochogwu,
    meta:{
      title:'My-Portfolios - Ojochogwu Dickson'
    }
  },
]

export default Details
