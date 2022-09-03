import Clinikli from '@/views/Pages/Projects-detail/Clinikli.vue'
import Sonvisage from '@/views/Pages/Projects-detail/Sonvisage.vue'
import Vinca from '@/views/Pages/Projects-detail/Vinca.vue'
import Ojochogwu from '@/views/Pages/Projects-detail/Ojochogwu.vue'
import FourthStream from '@/views/Pages/Projects-detail/FourthStream.vue'
const Details = [
  {
    path: '/work/clinikli',
    name: 'clinikli',
    component: Clinikli
  },
  {
    path: '/work/sonvisage',
    name: 'Sonvisage',
    component: Sonvisage
  },
  {
    path: '/work/vinca',
    name: 'Vinca',
    component: Vinca
  },

  {
    path:'/work/Fourthstream',
    name: 'Fourthstream',
    component:FourthStream
  },
  {
  path:'/work/ojochogwu',
  name:'ojochogwu',
  component: Ojochogwu
  },
]

export default Details
