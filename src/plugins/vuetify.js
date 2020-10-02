import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@/sass/main.scss'

Vue.use(Vuetify)

const theme = {
  primary: '#1F7087',
  secondary: '#4DB6AC',
  send: '#CCFF90',
  received: '#FAFAFA',
  confirm: '#00C853',
  validate: '#1565c0',
  danger: '#dc3545',
}

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
