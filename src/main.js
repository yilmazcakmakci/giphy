import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons/search'
import 'vue-awesome/icons/fire'
import 'vue-awesome/icons/file-alt'

Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
