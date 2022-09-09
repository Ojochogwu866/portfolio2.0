import { createStore } from 'vuex'


export default createStore({
  state: {
    controlValue: {
        showLayout: false,
        floatLayout: true,
        enableDownload: true,
        previewModal: true,
        paginateElementsByHeight: 1100,
        manualPagination: false,
        filename: 'Ojochogwu-Resume',
        pdfQuality: 2,
        pdfFormat: 'a4',
        pdfOrientation: 'portrait',
        pdfContentWidth: '800px'
    }
},
mutations: {

},

getters: {

},
  actions: {
  },
  modules: {
  }
})
