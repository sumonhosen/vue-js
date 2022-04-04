
import Vue from 'vue'
import App from './App.vue'

import VueRouter  from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store'


import {routes} from './routes';
import tinymce from 'vue-tinymce-text-editor'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import { faCoffee  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios);

Vue.use(IconsPlugin)

Vue.config.productionTip = false

    library.add(faFontAwesome,faCoffee)

    Vue.component('font-awesome-icon', FontAwesomeIcon)
	Vue.component('tinymce', tinymce)

const router = new VueRouter({ mode: 'history', routes: routes });


new Vue({
  	render: function (h) { return h(App) },
  	router,
  	store
}).$mount('#app')
