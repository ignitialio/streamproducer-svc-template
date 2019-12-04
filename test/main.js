import Vue from 'vue'
import Streamproducer from '../src/components/Streamproducer.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Streamproducer),
}).$mount('#app')
