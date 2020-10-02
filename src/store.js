import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    notification: {},
    listaConversas: [
      {
        id: 1,
        color: '#1F7087',
        foto: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        nome: 'Supermodel',
        ultima_mensagem: 'Foster the People',
      },
      {
        id: 2,
        color: '#952175',
        foto: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        nome: 'Halcyon Days',
        ultima_mensagem: 'Ellie Goulding',
      },
      {
        id: 3,
        color: '#952175',
        foto: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        nome: 'Halcyon Days',
        ultima_mensagem: 'Ellie Goulding',
      },
      {
        id: 4,
        color: '#952175',
        foto: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        nome: 'Halcyon Days',
        ultima_mensagem: 'Ellie Goulding',
      },
      {
        id: 5,
        color: '#952175',
        foto: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        nome: 'Halcyon Days',
        ultima_mensagem: 'Ellie Goulding',
      },
    ],
    listaMensagem: [],
    mensagemAtual: [
      {
        texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi enim delectus. Quia consequatur quisquam dignissimos voluptate, omnis magnam est. Impedit amet adipisci et explicabo rerum voluptates itaque magnam fugiat!',
        autor: 'self',
      },
    ],
    alvoConversa: {
      nome: '',
      foto: '',
    },
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_NOTIFICATION (state, payload) {
      payload.snackbar = true
      if (!payload.timeout) {
        payload.timeout = 2000
      }
      if (!payload.color) {
        payload.color = 'success'
      }
      state.notification = payload
    },
    SET_ALVO_CONVERSA (state, payload) {
      state.alvoConversa = payload
    },
  },
  actions: {

  },
  getters: {
    isLoading: state => state.loading,
    getMensagens: state => state.listaMensagem,
    getMensagemAtual: state => state.mensagemAtual,
    getAlvoConversa: state => state.alvoConversa,
    getConversas: state => state.listaConversas,
    isLendoMensagem: state => state.alvoConversa.id,
  },

})
