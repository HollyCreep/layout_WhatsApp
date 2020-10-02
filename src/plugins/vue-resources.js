import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://127.0.0.1:8000/api/'
