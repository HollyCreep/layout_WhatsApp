import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
// import { required } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/pt_BR.json'

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  })
})

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
