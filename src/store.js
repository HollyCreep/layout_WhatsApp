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
        color: 'secondary',
        foto: 'user0.png',
        nome: 'Paulo Castro',
        ultima_mensagem: 'Você está contratado!',
      },
      {
        id: 2,
        color: 'secondary',
        foto: 'user1.png',
        nome: 'Gustavo',
        ultima_mensagem: 'Vue é incrível!',
      },
      {
        id: 3,
        color: 'secondary',
        foto: 'user2.jpg',
        nome: 'Alfredo',
        ultima_mensagem: 'Cara o chefe está te procurando!',
      },
      {
        id: 4,
        color: 'secondary',
        foto: 'user3.jpg',
        nome: 'Michel',
        ultima_mensagem: 'Não acredito que você disse aquilo na reunião! kkk',
      },
      {
        id: 5,
        color: 'secondary',
        foto: 'user4.jpg',
        nome: 'Carolina',
        ultima_mensagem: 'Você conhece a Isabela ?',
      },
      {
        id: 6,
        color: 'secondary',
        foto: 'user5.png',
        nome: 'Isabela',
        ultima_mensagem: 'Você conhece a Carolina ?',
      },
    ],
    listaMensagem: [],
    mensagemAtual: [
      {
        texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi enim delectus. Quia consequatur quisquam dignissimos voluptate, omnis magnam est. Impedit amet adipisci et explicabo rerum voluptates itaque magnam fugiat!',
        autor: '',
      },
      {
        texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi enim delectus. Quia consequatur quisquam dignissimos voluptate, omnis magnam est. Impedit amet adipisci et explicabo rerum voluptates itaque magnam fugiat!',
        autor: '',
      },
      {
        texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi enim delectus. Quia consequatur quisquam dignissimos voluptate, omnis magnam est. Impedit amet adipisci et explicabo rerum voluptates itaque magnam fugiat!',
        autor: 'self',
      },
      {
        texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi enim delectus. Quia consequatur quisquam dignissimos voluptate, omnis magnam est. Impedit amet adipisci et explicabo rerum voluptates itaque magnam fugiat!',
        autor: '',
      },
      {
        texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto modi enim delectus. Quia consequatur quisquam dignissimos voluptate, omnis magnam est. Impedit amet adipisci et explicabo rerum voluptates itaque magnam fugiat!',
        autor: 'self',
      },
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
    SET_CONVERSA_ATUAL (state, payload) {
      if (payload) {
        state.mensagemAtual.slice(-1)[0].autor !== 'self' && state.mensagemAtual.pop()
        state.mensagemAtual.push({ autor: payload.nome, texto: payload.ultima_mensagem })
      }
    },
    SET_NOVA_MENSAGEM (state, payload) {
      state.mensagemAtual.push({ autor: 'self', texto: payload })
    },
  },
  actions: {
    mudaAlvoConversa (state, payload) {
      payload && payload.id !== state.state.alvoConversa.id ? state.commit('SET_ALVO_CONVERSA', payload) : state.commit('SET_ALVO_CONVERSA', {})
      state.commit('SET_CONVERSA_ATUAL', payload)
    },
    enviaMensagem (state, payload) {
      state.commit('SET_NOVA_MENSAGEM', payload)
    },
},
  getters: {
    isLoading: state => state.loading,
    getMensagens: state => state.listaMensagem,
    getMensagemAtual: state => state.mensagemAtual,
    getAlvoConversa: state => state.alvoConversa,
    getConversas: state => state.listaConversas,
  },

})
